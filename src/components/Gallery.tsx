"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import type { GalleryRecord } from '@/lib/supabase';

interface GalleryProps {
  photos: GalleryRecord[];
}

export default function Gallery({ photos }: GalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryRecord | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<string>('All');

  // Compute unique albums
  const albums = useMemo(() => {
    const unique = Array.from(new Set(photos.map(p => p.album || 'General')));
    return ['All', ...unique.sort()];
  }, [photos]);

  const filteredPhotos = useMemo(() => {
    if (activeAlbum === 'All') return photos;
    return photos.filter(p => (p.album || 'General') === activeAlbum);
  }, [photos, activeAlbum]);

  return (
    <section id="gallery" className="py-24 bg-white relative min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Memories</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy">Photo Gallery</h2>
            <div className="w-16 h-1.5 bg-brand-gold mt-6 rounded-full"></div>
          </div>
        </div>

        {/* Albums Filter */}
        {albums.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {albums.map(album => (
              <button
                key={album}
                onClick={() => setActiveAlbum(album)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeAlbum === album 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {album}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layoutId={`photo-container-${photo.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedPhoto(photo)}
                className="relative aspect-4/3 rounded-2xl overflow-hidden group shadow-md cursor-pointer bg-gray-100"
              >
                <motion.div 
                  layoutId={`photo-${photo.id}`}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src={photo.image_url} 
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Caption Overlay */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent p-6 pt-12 opacity-0 group-hover:opacity-100 flex items-end transform translate-y-4 group-hover:translate-y-0"
                >
                  <p className="text-white font-serif font-bold text-lg">{photo.caption}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100 mt-8">
            <ImageIcon className="mx-auto text-gray-300 w-16 h-16 mb-4" />
            <p className="text-gray-500 font-serif text-xl">No photos in this album yet.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div 
              layoutId={`photo-container-${selectedPhoto.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`photo-${selectedPhoto.id}`}
                src={selectedPhoto.image_url}
                alt={selectedPhoto.caption}
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-xl font-serif font-bold mt-4"
              >
                {selectedPhoto.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
