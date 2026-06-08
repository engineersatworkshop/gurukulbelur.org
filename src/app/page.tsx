"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeatureStrip from '@/components/FeatureStrip';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      
      {/* Adding About to make it longer and more engaging */}
      <About />
      
      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Location</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Find Us Here</h2>
            <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-brand-offwhite p-2 md:p-4 rounded-3xl shadow-sm border border-gray-100 max-w-6xl mx-auto"
          >
            <iframe
              title="Gurukul School Location"
              src="https://maps.google.com/maps?q=Gurukul%20School%2C%20J993%2BQ8V%2C%20Girish%20Ghosh%20Rd%2C%20Bhot%20Bagan%2C%20Belur%20Math%2C%20Liluah%2C%20Howrah%2C%20West%20Bengal%20711202%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '14px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}
