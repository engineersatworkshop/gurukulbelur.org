'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Plus, Trash2, FileUp } from 'lucide-react';
import { addNoticeAction, deleteNoticeAction } from '@/app/actions/notices';
import { getNotices, NoticeRecord } from '@/lib/supabase';

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<NoticeRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    setLoading(true);
    const data = await getNotices();
    setNotices(data);
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setError('The file size is exceeding 10 mb size it should be lower than 10mb');
      e.target.value = '';
      setPdfFile(null);
      return;
    }
    setError(null);
    setPdfFile(file || null);
  };

  const handleAddNotice = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const title = formData.get('title') as string;
      const description = formData.get('description') as string;
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

      let pdfUrl = null;

      // 1. Client-side unsigned upload if PDF exists
      if (pdfFile) {
        if (!cloudName || cloudName === 'your_cloud_name') {
          throw new Error('Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local');
        }

        const uploadData = new FormData();
        uploadData.append('file', pdfFile);
        uploadData.append('upload_preset', 'school-gallery');

        const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
          method: 'POST',
          body: uploadData,
        });

        if (!uploadRes.ok) {
          throw new Error('Failed to upload PDF to Cloudinary. Check your upload preset settings.');
        }

        const uploadResult = await uploadRes.json();
        console.log("Cloudinary Upload Result:", uploadResult);
        pdfUrl = uploadResult.secure_url;
      }

      // 2. Save notice to Supabase via Server Action
      const res = await addNoticeAction(title, description, pdfUrl);

      if (res?.error) {
        throw new Error(res.error);
      }

      setIsAdding(false);
      setPdfFile(null);
      await fetchNotices();
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = (url: string, title: string) => {
    const downloadApiUrl = `/api/download?url=${encodeURIComponent(url)}&name=${encodeURIComponent(title)}`;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = downloadApiUrl;
    document.body.appendChild(iframe);

    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 5000);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      const res = await deleteNoticeAction(id);
      if (res?.error) {
        alert(res.error);
      } else {
        await fetchNotices();
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-navy">Manage Notices</h1>
          <p className="text-gray-500 mt-1">Add, view, or delete school notices.</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center space-x-2 bg-brand-gold text-brand-navy px-4 py-2 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-md"
        >
          {isAdding ? <FileText size={18} /> : <Plus size={18} />}
          <span>{isAdding ? 'View All' : 'Add Notice'}</span>
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
            <h2 className="text-xl font-bold text-brand-navy mb-6">Create New Notice</h2>
            <form onSubmit={handleAddNotice} className="space-y-4 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Notice Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Annual Sports Meet 2026"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  placeholder="Details about the notice..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-gold outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Attach PDF (Optional)</label>
                <div className="flex items-center space-x-2">
                  <FileUp className="text-gray-400" />
                  <input
                    type="file"
                    name="pdf"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-gold/10 file:text-brand-navy hover:file:bg-brand-gold/20"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-6 py-2 rounded-lg text-gray-500 hover:bg-gray-100 font-semibold mr-3 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-lg bg-brand-navy text-white font-semibold hover:bg-[#153460] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Save Notice'}
                </button>
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
              <div className="py-20 text-center text-gray-500">Loading notices...</div>
            ) : notices.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-500">
                No notices found. Create one!
              </div>
            ) : (
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-brand-navy">{notice.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{notice.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                        <span>{new Date(notice.created_at).toLocaleDateString()}</span>
                        {notice.pdf_url && (
                          <button
                            onClick={() => handleDownload(notice.pdf_url!, notice.title)}
                            className="text-blue-500 hover:underline flex items-center font-medium"
                          >
                            <FileText size={14} className="mr-1" /> Download Notice
                          </button>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(notice.id)}
                      className="p-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex-shrink-0"
                      title="Delete Notice"
                    >
                      <Trash2 size={20} />
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
