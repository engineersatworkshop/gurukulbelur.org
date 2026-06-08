import React from 'react';
import { getNotices, getGalleryImages } from '@/lib/supabase';
import { FileText, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const notices = await getNotices();
  const images = await getGalleryImages();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-navy">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome to the Gurukul Admin Dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Notices</p>
            <h2 className="text-4xl font-bold text-brand-navy">{notices.length}</h2>
          </div>
          <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
            <FileText size={28} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Gallery Photos</p>
            <h2 className="text-4xl font-bold text-brand-navy">{images.length}</h2>
          </div>
          <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
            <ImageIcon size={28} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link href="/admin/notices" className="group block bg-brand-navy text-white p-6 rounded-2xl shadow-md hover:bg-[#153460] transition-colors">
          <h3 className="font-bold text-lg flex items-center">
            <FileText className="mr-2" size={20}/> Manage Notices
          </h3>
          <p className="text-white/70 text-sm mt-2">Create, edit, or remove school notices and attached PDFs.</p>
        </Link>
        <Link href="/admin/gallery" className="group block bg-brand-gold text-brand-navy p-6 rounded-2xl shadow-md hover:bg-yellow-400 transition-colors">
          <h3 className="font-bold text-lg flex items-center">
            <ImageIcon className="mr-2" size={20}/> Manage Gallery
          </h3>
          <p className="text-brand-navy/70 text-sm mt-2">Upload new photos or delete existing ones from the gallery.</p>
        </Link>
      </div>
    </div>
  );
}
