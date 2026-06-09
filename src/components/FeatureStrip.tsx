"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, GraduationCap, Calendar } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

const features = [
  {
    icon: <Award className="text-brand-gold w-8 h-8" />,
    title: 'CISCE Affiliated',
    desc: 'Excellence in education standards',
  },
  {
    icon: <ShieldCheck className="text-brand-gold w-8 h-8" />,
    title: '100% Secure',
    desc: 'Safe campus for every child',
  },
  {
    icon: <GraduationCap className="text-brand-gold w-8 h-8" />,
    title: 'Co-Educational',
    desc: 'Empowering boys and girls equally',
  },
  {
    icon: <Calendar className="text-brand-gold w-8 h-8" />,
    title: '6 Days a Week',
    desc: 'Holistic weekly learning cycle',
  },
];

export default function FeatureStrip() {
  return (
    <div className="container mx-auto px-4 relative z-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 -mt-[68px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 cursor-default hover:bg-gray-50 rounded-xl transition-colors duration-300"
            >
              <div className="bg-brand-offwhite p-4 rounded-full mb-4">
                {feat.icon}
              </div>
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-2">
                {feat.title}
              </h3>
              <p className="text-gray-500 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
