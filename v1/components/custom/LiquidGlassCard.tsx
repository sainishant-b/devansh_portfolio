'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function LiquidGlassCard({ children, className = "", delay = 0 }: LiquidGlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        hover:border-white/[0.15]
        hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]
        transition-all duration-500 ease-out
        ${className}
      `}
    >
      {/* Liquid gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] pointer-events-none" />
      
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
