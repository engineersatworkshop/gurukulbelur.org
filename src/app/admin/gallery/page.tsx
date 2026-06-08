'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Plus, Trash2, Upload } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { saveGalleryImageAction, deleteGalleryImageAction } from '@/app/actions/gallery';
import { getGalleryImages, GalleryRecord } from '@/lib/supabase';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    const data = await getGalleryImages();
    setImages(data);
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        const msg = 'File size exceeds 10MB limit.';
        setError(msg);
        toast.error(msg);
        e.target.value = '';
        setPreviewUrl(null);
        setImageFile(null);
        return;
      }
      setError(null);
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreviewUrl(null);
      setError(null);
    }
  };

  const handleAddImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) return;

    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData(e.currentTarget);
      const caption = formData.get('caption') as string;
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

      if (!cloudName || cloudName === 'your_cloud_name') {
        throw new Error('Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local');
      }

      // 1. Compress image on the client side
      const options = {
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: 'image/jpeg',
        initialQuality: 0.8,
      };
      
      const compressedFile = await imageCompression(imageFile, options);

      // 2. Client-side unsigned upload to Cloudinary
      const uploadData = new FormData();
      uploadData.append('file', compressedFile);
      uploadData.append('upload_preset', 'school-gallery');

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: uploadData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload image to Cloudinary. Check your upload preset.');
      }

      const uploadResult = await uploadRes.json();
      const imageUrl = uploadResult.secure_url;

      // 3. Save the URL to Supabase via Server Action
      const dbRes = await saveGalleryImageAction(imageUrl, caption);
      
      if (dbRes?.error) {
        throw new Error(dbRes.error);
      }

      toast.success('Photo uploaded successfully!');
      setIsAdding(false);
      setPreviewUrl(null);
      setImageFile(null);
      await fetchImages();
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      toast.error(err.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const res = await deleteGalleryImageAction(id);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success('Photo deleted successfully!');
        await fetchImages();
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-navy">Manage Gallery</h1>
          <p className="text-gray-500 mt-1">Upload and delete photos for the school gallery.</p>
        </div>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setPreviewUrl(null);
          }}
          className="flex items-center space-x-2 bg-brand-gold text-brand-navy px-4 py-2 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-md"
        >
          {isAdding ? <ImageIcon size={18} /> : <Plus size={18} />}
          <span>{isAdding ? 'View Gallery' : 'Upload Photo'}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isAdding ? (
          <motion.div
            key="add-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-bold text-brand-navy mb-6">Upload New Photo</h2>
            <form onSubmit={handleAddImage} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* File Upload Zone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Photo</label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl overflow-hidden hover:border-brand-gold transition-colors aspect-4/3 bg-gray-50 group">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <Upload className="text-gray-400 w-12 h-12 mb-2 group-hover:text-brand-gold transition-colors" />
                      <p className="text-sm font-medium text-gray-500 text-center">Click or drag image here to upload</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    name="image"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              {/* Details Form */}
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Caption</label>
                  <input 
                    type="text" 
                    name="caption"
                    required
                    placeholder="e.g. Annual Sports Day 2026"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold outline-none"
                  />
                </div>
                
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                
                <div className="mt-auto flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAdding(false);
                      setPreviewUrl(null);
                    }}
                    className="px-6 py-2.5 rounded-lg text-gray-500 hover:bg-gray-100 font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !previewUrl}
                    className="px-6 py-2.5 rounded-lg bg-brand-navy text-white font-semibold hover:bg-[#153460] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Uploading...' : 'Upload Photo'}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {loading ? (
              <div className="py-20 text-center text-gray-500">Loading gallery...</div>
            ) : images.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-500">
                No photos found. Upload some!
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((photo) => (
                  <div key={photo.id} className="relative aspect-4/3 rounded-xl overflow-hidden group border border-gray-200 bg-gray-100">
                    <Image src={photo.image_url} alt={photo.caption} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium text-sm truncate">{photo.caption}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(photo.id)}
                      className="absolute top-2 right-2 p-2 bg-red-500/90 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 shadow-lg"
                      title="Delete Photo"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
