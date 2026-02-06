'use client';

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="min-h-[50vh] w-full py-20 px-5 md:px-10 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* Liquid Glass Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.36)] p-8 md:p-12">
            {/* Inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] pointer-events-none" />
            
            <div className="relative text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              <p className="mb-6">
                I&apos;m a passionate developer with expertise in building modern web applications. I specialize in creating clean, efficient, and user-friendly solutions that solve real-world problems. With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life through code.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or continuously learning to stay up-to-date with the ever-evolving tech landscape. I believe in writing maintainable code and creating experiences that users love.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
