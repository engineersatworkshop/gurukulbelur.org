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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.527633633804!2d88.3510526759728!3d22.634125779446294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d31d45c6023%3A0x6bfae04bcfa724fb!2sBelur%20Math!5e0!3m2!1sen!2sin!4v1703120000000!5m2!1sen!2sin"
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
