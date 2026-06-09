"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe } from 'lucide-react';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

const bgStyle = {
  background: 'linear-gradient(145deg, #E82529 0%, #E82529 45%, #29ABE2 65%, #29ABE2 100%)',
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center overflow-hidden text-white bg-doodles-white" style={bgStyle}>
      {/* White wave divider between red and blue — mirrors brochure layout */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 60% at 50% 60%, #29ABE2 0%, transparent 70%)'
      }} />

      <div className="container mx-auto px-4 z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] pb-16">
          {/* Left Text Column */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="bg-white/15 border border-white/30 px-4 py-1.5 rounded-full text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Admissions Open 2026-2027
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-4 text-white drop-shadow-md">
              Shaping <span className="text-yellow-300 drop-shadow-sm">Young Minds</span> <br />for a Brighter Future
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="font-serif text-2xl italic text-gray-300">&ldquo;Vidya Dadati Vinayam&rdquo;</p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest">Education gives Humility</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Located in the serene environment of Belur Math, Gurukul provides a foundation of excellence, blending modern education with traditional values for children.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#about" className="bg-white text-brand-red px-8 py-3.5 rounded-full font-bold hover:bg-yellow-100 transition-colors shadow-lg">
                Discover Gurukul
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/15 transition-colors">
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Cards Column */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: -8, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold">
                <BookOpen size={28} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">ICSE Curriculum</h3>
                <p className="text-sm text-gray-300">Comprehensive and structured syllabus</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: -8, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold">
                <Users size={28} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Co-educational</h3>
                <p className="text-sm text-gray-300">Fostering equality and mutual respect</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ x: -8, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">English Medium</h3>
                <p className="text-sm text-gray-300">Global communication standards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}