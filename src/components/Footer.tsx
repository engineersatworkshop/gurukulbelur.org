import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white pt-16 pb-8" style={{ backgroundColor: '#1B3178', borderTop: '4px solid #E82529' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Block */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/main logopng.png" alt="Gurukul Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">Gurukul English Medium Co-Ed School</h2>
            </div>
            <p className="text-brand-gold italic font-serif mb-4">&ldquo;Vidya Dadati Vinayam&rdquo;</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              An English Medium Co-educational School providing holistic primary education with an emphasis on discipline and moral values.
            </p>
            <address className="not-italic text-gray-400 text-sm">
              147/1A/2/A, Girish Ghosh Road, Belurmath,<br />
              Howrah, West Bengal 711202
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-blue-200 hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-blue-200 hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-blue-200 hover:text-yellow-300 transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="text-blue-200 hover:text-yellow-300 transition-colors">Admissions</Link></li>
              <li><Link href="/notice-board" className="text-blue-200 hover:text-yellow-300 transition-colors">Notice Board</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Information</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-blue-200 hover:text-yellow-300 transition-colors">School Timings</Link></li>
              <li><Link href="/gallery" className="text-blue-200 hover:text-yellow-300 transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-yellow-300 transition-colors">Contact Us</Link></li>
              <li><Link href="mailto:co.gurukul@gmail.com" className="text-blue-200 hover:text-yellow-300 transition-colors">co.gurukul@gmail.com</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gurukul English Medium School. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with excellence in Belur Math, Howrah</p>
        </div>
      </div>
    </footer>
  );
}
