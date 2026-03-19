'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline() {
  const timeline = [
    { year: '2021', text: 'Hustle in Python' },
    { year: '2022', text: 'Website Bounty Hunting' },
    { year: '2023', text: 'Learn Haskell' },
    { year: '2024', text: 'Dsa in Java' },
  ];

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-12 text-white relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-24 text-center tracking-tight"
        >
          Hustling For something
        </motion.h3>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-between relative">
          {/* Horizontal Connecting line for desktop */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-white/10 hidden md:block -z-10" />
          
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="flex-1 flex flex-col items-center group cursor-default"
            >
              {/* Node */}
              <div className="w-16 h-16 rounded-full bg-[#121212] border-4 border-blue-500 flex items-center justify-center text-xl font-bold mb-8 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {idx + 1}
              </div>
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl w-full text-center group-hover:bg-white/10 group-hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <h4 className="text-2xl md:text-3xl font-black text-blue-400 mb-3 tracking-widest">{item.year}</h4>
                <p className="text-lg md:text-xl text-gray-300 font-light">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
