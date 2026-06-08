"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: <MapPin className="text-brand-gold w-6 h-6" />,
    label: 'Address',
    value: '147/1A/2/A, Girish Ghosh Road, Belurmath, Howrah 711 202',
  },
  {
    icon: <Phone className="text-brand-gold w-6 h-6" />,
    label: 'Phone',
    value: '+91 98318 35171, +91 98317 35171',
  },
  {
    icon: <Mail className="text-brand-gold w-6 h-6" />,
    label: 'Email',
    value: 'co.gurukul@gmail.com',
  },
  {
    icon: <Clock className="text-brand-gold w-6 h-6" />,
    label: 'Office Hours',
    value: 'Mon - Sat: 8:15 AM - 2:30 PM',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-offwhite bg-doodles">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Contact Us</h2>
          <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm border-2 border-transparent hover:border-brand-gold transition-colors duration-300 flex flex-col items-start"
              >
                <div className="bg-brand-navy p-3 rounded-full mb-4">
                  {info.icon}
                </div>
                <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">{info.label}</h4>
                <p className="text-brand-navy font-semibold text-lg leading-snug">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white p-2 md:p-4 rounded-3xl shadow-sm border border-gray-100"
          >
            <iframe
              title="Gurukul School Location"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=22.6194914,88.3533101+(Gurukul%20School)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: '14px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
