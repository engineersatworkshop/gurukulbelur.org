import React from 'react';
import { Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="hidden md:block text-white text-sm py-2" style={{ backgroundColor: '#E82529' }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-yellow-300" />
            <span>+91 98318 35171 / +91 98317 35171</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-yellow-300" />
            <span>Mon-Fri: 8:15 AM - 2:30 PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/notice-board" className="hover:text-yellow-200 transition-colors">Notice Board</Link>
          <Link href="/gallery" className="hover:text-yellow-200 transition-colors">Photo Gallery</Link>
          <Link href="/contact" className="bg-white text-sm px-4 py-1 rounded-full font-semibold hover:bg-yellow-50 transition-colors" style={{ color: '#E82529' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
