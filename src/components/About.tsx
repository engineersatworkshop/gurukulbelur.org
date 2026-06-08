"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Book } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-offwhite bg-doodles overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
              whileHover={{ y: -5 }}
              className="absolute -top-6 -right-6 md:-right-8 z-10 bg-brand-gold text-brand-navy w-32 h-32 rounded-full flex flex-col justify-center items-center font-bold shadow-xl border-4 border-white"
            >
              <span className="text-2xl">ICSE</span>
              <span className="text-sm tracking-wider uppercase mt-1">Affiliated</span>
            </motion.div>

            {/* Building Image Box */}
            <div className="aspect-4/5 md:aspect-square w-full bg-brand-navy rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center relative">
              <img src="/Building.jpg" alt="Gurukul Building" className="w-full h-full object-cover" />
            </div>
            
            {/* Background Accent Element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right: Text and Pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Welcome to Gurukul</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
              Nurturing Values. <br />Inspiring Excellence.
            </motion.h2>

            <motion.div variants={itemVariants} className="w-20 h-1.5 bg-brand-gold mb-8 rounded-full"></motion.div>

            <motion.p variants={itemVariants} className="text-gray-600 mb-6 leading-relaxed">
              At Gurukul English Medium Co-educational School, we believe that education is the key to unlocking human potential. Established in the sacred proximity of Belur Math, we carry forward the tradition of academic excellence intertwined with profound moral values.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 mb-10 leading-relaxed">
              Our curriculum is designed to stimulate intellectual curiosity while grounding students in discipline and humility, preparing them not just for school, but for life.
            </motion.p>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Target size={24} />, title: "Our Vision", desc: "To create a high quality centre of learning which will perpetuate the culture of India and its holistic values in an environment driven by technology and a focused pursuit of the intellect." },
                { icon: <Heart size={24} />, title: "Our Mission", desc: "To train minds which will carry forward the country's legacy of educational excellence by creating global citizens. We identify the inherent potential of each child to give them a headstart in life." },
                { icon: <Book size={24} />, title: "Aims & Objectives", desc: "To provide a happy, stable, caring, secure and stimulating environment, where each child is able to develop to their full potential, happily using carefully planned learning activities." },
                { icon: <Lightbulb size={24} />, title: "Pedagogy & Values", desc: "Experiential, joyful learning that empowers children to act as representatives of a value-based society, fostering critical thinking and emotional balance." }
              ].map((pillar, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-white p-5 rounded-xl border-l-4 border-brand-gold shadow-sm flex items-start space-x-4">
                  <div className="text-brand-gold mt-1">{pillar.icon}</div>
                  <div>
                    <h4 className="font-serif font-bold text-brand-navy mb-1">{pillar.title}</h4>
                    <p className="text-xs text-gray-500">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leadership Team Section */}
        <div className="border-t border-gray-200 mt-24 pt-20">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase block mb-3">Our Management</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Leadership Messages</h3>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                role: "FOUNDER & PRINCIPAL",
                name: "Mr. Arun Kumar Singh",
                avatar: <img src="/management head/Mr. Arun Kumar Singh.jpg" alt="Mr. Arun Kumar Singh" className="w-full h-full object-cover rounded-full" />,
                quote: "“Mr. Arun Kumar Singh developed an intense desire to educate young minds to grow up to be perfect citizens and face the challenges of tomorrow, laying a firm foundation for Gurukul Co-Ed School looking 'Beyond the Lines'.”"
              },
              {
                role: "THE PRESIDENT",
                name: "Mrs. Malti Devi Singh",
                avatar: <img src="/management head/Mrs. Malti Devi Singh.jpg" alt="Mrs. Malti Devi Singh" className="w-full h-full object-cover rounded-full" />,
                quote: "“Mrs. Malti Devi Singh had a dream of establishing a school with a blend of ethic values and modern ideas. From a very tender age, she had shown what could be achieved with intelligence, dedication, and self-discipline.”"
              },
              {
                role: "THE CHAIRMAN",
                name: "Mr. D. K. Singh",
                avatar: <img src="/management head/Mr. D. K. Singh.jpg" alt="Mr. D. K. Singh" className="w-full h-full object-cover rounded-full" />,
                quote: "“From his early age, he has shown what could be achieved with intelligence, dedication, and hard work coupled with truth. His ideals and character are the aim of true education and the guiding force of the school.”"
              },
              {
                role: "RECTOR",
                name: "Mr. Manish Kumar Singh",
                avatar: <img src="/management head/Mr. Manish Kumar Singh.jpg" alt="Mr. Manish Kumar Singh" className="w-full h-full object-cover rounded-full" />,
                quote: "“We believe in a joyful experiential learning system wherein each child is encouraged to participate in a myriad of activities to offer emotional balance, critical thinking, and accept failure graciously!”"
              }
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-brand-offwhite flex items-center justify-center text-3xl shadow-inner shrink-0 p-1 border-2 border-brand-gold">
                  {leader.avatar}
                </div>
                <div>
                  <span className="text-brand-gold font-bold text-xs tracking-wider uppercase block mb-1">{leader.role}</span>
                  <h4 className="font-serif font-bold text-xl text-brand-navy mb-3">{leader.name}</h4>
                  <p className="text-gray-600 italic text-sm leading-relaxed">{leader.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
