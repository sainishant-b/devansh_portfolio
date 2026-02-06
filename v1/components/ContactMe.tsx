'use client';

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactMe() {
  return (
    <section id="contact" className="min-h-[60vh] w-full py-20 px-5 md:px-10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-white/40 uppercase tracking-widest text-sm mb-4 block"
        >
          What's Next?
        </motion.span>
        
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
        >
          Get In Touch
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
           className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.a 
           href="mailto:hello@example.com"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           transition={{ duration: 0.3 }}
           viewport={{ once: true }}
           className="relative inline-block overflow-hidden group"
        >
          {/* Liquid Glass Button */}
          <div className="relative px-10 py-4 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] text-white text-lg font-medium transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/[0.25] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Say Hello</span>
          </div>
        </motion.a>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-8 justify-center items-center mt-16"
        >
          <SocialLink href="https://github.com/devansh7439" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/devansh-bagaria-167921300/" icon={<Linkedin size={24} />} label="LinkedIn" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
