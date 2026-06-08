'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logoutAction } from '@/app/actions/auth';
import { LayoutDashboard, FileText, Image as ImageIcon, LogOut, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Notices', href: '/admin/notices', icon: FileText },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SidebarContent = () => (
    <>
      <div className="p-6 hidden md:block">
        <span className="font-serif font-bold text-2xl text-brand-gold block">Gurukul</span>
        <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase mt-1 block">Admin Panel</span>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-brand-gold text-brand-navy font-bold shadow-md' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <form action={logoutAction}>
          <button 
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white rounded-xl transition-all font-semibold"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </form>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-brand-navy text-white p-4 flex items-center justify-between sticky top-0 z-50">
        <span className="font-serif font-bold text-xl text-brand-gold">Gurukul Admin</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 bg-white/10 rounded-lg">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Sidebar (Always rendered, hidden on mobile via CSS) */}
      <div className="hidden md:flex sticky top-0 left-0 h-screen w-64 bg-brand-navy text-white z-40 shadow-xl flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && mounted && (
          <motion.div 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed md:hidden top-0 left-0 h-full w-64 bg-brand-navy text-white z-40 shadow-xl flex flex-col"
          >
            <div className="p-4 flex justify-between items-center bg-brand-navy border-b border-white/10">
              <span className="font-serif font-bold text-xl text-brand-gold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white bg-white/10 rounded-lg">
                <X size={24} />
              </button>
            </div>
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 md:p-8 relative">
        {/* Overlay for mobile when sidebar is open */}
        {mobileMenuOpen && mounted && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        <div className="max-w-6xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
