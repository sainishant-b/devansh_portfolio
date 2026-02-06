'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidGlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function LiquidGlassButton({ 
  children, 
  onClick, 
  href, 
  className = "",
  variant = "primary" 
}: LiquidGlassButtonProps) {
  const baseStyles = `
    relative overflow-hidden
    px-8 py-3 rounded-full
    font-medium tracking-wide
    transition-all duration-500 ease-out
    group
  `;

  const variants = {
    primary: `
      bg-white/10 backdrop-blur-xl
      border border-white/20
      text-white
      hover:bg-white/15
      hover:border-white/30
      hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
    `,
    secondary: `
      bg-transparent
      border border-white/10
      text-white/80
      hover:bg-white/5
      hover:border-white/20
      hover:text-white
    `,
    outline: `
      bg-transparent
      border border-white/30
      text-white
      hover:bg-white/10
      hover:border-white/50
    `
  };

  const content = (
    <>
      {/* Liquid shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className} inline-block`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}
