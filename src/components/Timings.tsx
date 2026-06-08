"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Timings() {
  return (
    <section id="timings" className="py-24 bg-brand-offwhite bg-doodles">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Schedule</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">School Timings</h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Timing Rows */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-100">
              <div className="bg-brand-navy p-3 rounded-full text-white">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-navy">Regular Hours</h3>
                <p className="text-gray-500 text-sm">Academic Year 2026-2027</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center group border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700">Play House / Lower & Upper Nursery</span>
                <span className="bg-brand-navy text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  8:15 AM - 11:50 AM
                </span>
              </div>
              <div className="flex justify-between items-center group border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700">Class K.G. & Class I</span>
                <span className="bg-brand-navy text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  8:15 AM - 1:10 PM
                </span>
              </div>
              <div className="flex justify-between items-center group border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700">Class II to Class X</span>
                <span className="bg-brand-navy text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  8:15 AM - 2:30 PM
                </span>
              </div>
              <div className="flex justify-between items-center group border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700">Class XI & Class XII</span>
                <span className="bg-brand-navy text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  8:15 AM - 1:10 PM
                </span>
              </div>
              <div className="flex justify-between items-center group border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700">Principal Visiting Hours</span>
                <span className="bg-brand-gold text-brand-navy px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                  9:00 AM - 10:00 AM
                </span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="font-semibold text-gray-700">School Tuck Shop</span>
                <span className="bg-brand-gold text-brand-navy px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                  9:00 AM - 12:00 PM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Navy Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-navy rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            
            <h3 className="font-serif text-3xl font-bold text-brand-gold mb-6 relative z-10">Punctuality & Discipline</h3>
            
            <div className="space-y-6 relative z-10">
              <p className="text-gray-300 leading-relaxed text-lg">
                At Gurukul, we emphasize the utmost importance of punctuality. Students are expected to arrive at least 15 minutes prior to the morning assembly.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                The school gates close exactly at 7:55 AM. Late arrivals without prior valid notification will face disciplinary action as per the student code of conduct. Let&apos;s work together to build strong habits.
              </p>
            </div>
            
            {/* Small accent detail */}
            <div className="mt-8 flex items-center space-x-2">
              <div className="w-8 h-1 bg-brand-gold rounded"></div>
              <div className="w-2 h-1 bg-brand-gold rounded"></div>
              <div className="w-1 h-1 bg-brand-gold rounded"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
