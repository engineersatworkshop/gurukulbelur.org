"use client";

import React from 'react';
import { motion } from 'framer-motion';

const academicsData = [
  {
    emoji: '📝',
    title: 'Primary Education',
    desc: 'Foundational learning programs focusing on reading, writing, and basic arithmetic in a nurturing environment.',
  },
  {
    emoji: '🎨',
    title: 'Arts & Crafts',
    desc: 'Encouraging creative expression through diverse mediums to develop fine motor skills and imagination.',
  },
  {
    emoji: '🏃‍♂️',
    title: 'Physical Education',
    desc: 'Structured sports and activities designed to promote physical fitness and teamwork among students.',
  },
  {
    emoji: '💻',
    title: 'Modern Learning',
    desc: 'Integration of basic technology and interactive methods to make learning engaging and relevant.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

export default function Academics() {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Academic Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Our Curriculum</h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {academicsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
              }}
              className="bg-brand-offwhite rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300"
            >
              {/* Top Gold Bar */}
              <div className="h-1.5 w-full bg-brand-gold"></div>
              
              <div className="p-8">
                <div className="text-5xl mb-6">{item.emoji}</div>
                <h3 className="font-serif font-bold text-xl text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
