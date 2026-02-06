'use client';

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Project Eidos",
    category: "Interactive Experience",
    description: "A WebGL-based exploration of digital consciousness.",
    image: "/images/project-1.jpg",
  },
  {
    title: "Lumina Interface",
    category: "Design System",
    description: "Component library for next-gen dashboard applications.",
    image: "/images/project-2.jpg",
  },
  {
    title: "Apex Finance",
    category: "Fintech",
    description: "Real-time trading platform with sub-millisecond updates.",
    image: "/images/project-3.jpg",
  },
  {
    title: "Nebula Stream",
    category: "Media Platform",
    description: "High-performance video streaming architecture.",
    image: "/images/project-4.jpg",
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: -1000 });

  useEffect(() => {
    const calculateConstraints = () => {
      const cardWidth = window.innerWidth >= 768 ? 500 : 400;
      const gap = 24;
      const padding = window.innerWidth >= 768 ? 80 : 40;
      const totalWidth = (projects.length * cardWidth) + ((projects.length - 1) * gap);
      const left = -(totalWidth - window.innerWidth + padding);
      setDragConstraints({ right: 0, left: Math.min(left, 0) });
    };

    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, []);

  return (
    <section id="projects" className="min-h-screen w-full py-20 overflow-hidden">
      <div className="px-5 md:px-10 mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-7xl mx-auto text-center"
        >
          Projects
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-px bg-white/30 mx-auto mt-6"
        />
      </div>
      
      {/* Horizontal Scrolling Container */}
      <motion.div 
        ref={containerRef}
        className="flex gap-6 px-5 md:px-10 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={dragConstraints}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex-shrink-0 w-[400px] md:w-[500px] h-[280px] md:h-[320px] rounded-2xl overflow-hidden transition-all duration-500"
          >
            {/* Liquid Glass Card Background */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.36)] group-hover:border-white/[0.15] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500" />
            
            {/* Inner gradient shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent rounded-2xl pointer-events-none" />
            
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-opacity duration-700 rounded-2xl"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl" />
            
            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-end">
              <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">
                {project.category}
              </span>
              <h3 className="text-white font-medium text-2xl md:text-3xl mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                {project.description}
              </p>
            </div>
            
            {/* Liquid bottom line animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Scroll Hint */}
      <div className="px-5 md:px-10 mt-12 max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 text-xs tracking-widest uppercase flex items-center justify-center gap-4"
        >
          <span className="w-12 h-px bg-white/20" />
          Drag to explore
          <span className="w-12 h-px bg-white/20" />
        </motion.p>
      </div>
    </section>
  );
}
