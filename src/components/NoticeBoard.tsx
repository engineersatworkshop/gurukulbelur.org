"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, FileText } from 'lucide-react';
import type { NoticeRecord } from '@/lib/supabase';

interface NoticeBoardProps {
  notices: NoticeRecord[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

export default function NoticeBoard({ notices }: NoticeBoardProps) {
  const handleDownload = (e: React.MouseEvent, url: string, title: string) => {
    e.stopPropagation();
    e.preventDefault();
    const downloadApiUrl = `/api/download?url=${encodeURIComponent(url)}&name=${encodeURIComponent(title)}`;
    
    // Create an invisible iframe to trigger the download without navigating away
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = downloadApiUrl;
    document.body.appendChild(iframe);
    
    // Cleanup iframe after a few seconds
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 5000);
  };

  return (
    <section id="notice-board" className="py-24 bg-brand-navy bg-doodles-white relative overflow-hidden min-h-screen">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
              <Bell className="text-brand-gold w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Notice Board
            </h2>
            <div className="w-20 h-1.5 bg-brand-gold mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-8">
              Stay updated with the latest announcements, upcoming events, and important schedules at Gurukul English Medium School.
            </p>

            <a 
              href="/Holiday Calendar 2026-27.pdf" 
              download="Holiday_Calendar_2026-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded-xl shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="mr-2" size={20} />
              Download Holiday Calendar
            </a>
          </motion.div>

          {/* Right Column: Notices List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 flex flex-col space-y-4"
          >
            {notices.length === 0 ? (
              <div className="text-gray-400 p-6 bg-white/5 border border-white/10 rounded-2xl">
                No notices available at this time.
              </div>
            ) : (
              notices.map((notice) => {
                const dateObj = new Date(notice.created_at);
                const day = dateObj.getDate().toString().padStart(2, '0');
                const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
                
                return (
                  <motion.div
                    key={notice.id}
                    variants={itemVariants}
                    whileHover={{ x: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 cursor-pointer transition-colors"
                    onClick={(e) => {
                      if (notice.pdf_url) {
                        handleDownload(e, notice.pdf_url, notice.title);
                      }
                    }}
                  >
                    {/* Date Badge */}
                    <div className="bg-brand-gold rounded-xl p-3 flex flex-col items-center justify-center min-w-[80px] shadow-lg shrink-0">
                      <span className="text-2xl font-bold text-brand-navy leading-none mb-1">{day}</span>
                      <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">{month}</span>
                    </div>

                    {/* Content */}
                    <div className="grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300`}>
                          General
                        </span>
                        {notice.pdf_url && (
                          <button 
                            onClick={(e) => handleDownload(e, notice.pdf_url!, notice.title)}
                            className="text-xs font-bold px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors flex items-center shadow-sm"
                          >
                            <FileText size={14} className="mr-1" />
                            Download Notice
                          </button>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-white mb-2">{notice.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{notice.description}</p>
                    </div>
                  </motion.div>
                );
              })
            )}
            
            {notices.length > 0 && (
              <motion.div variants={itemVariants} className="pt-4 flex justify-end">
                <button className="text-brand-gold hover:text-white font-semibold flex items-center transition-colors">
                  View All Notices <span className="ml-1">→</span>
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
