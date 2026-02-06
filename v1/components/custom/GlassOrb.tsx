'use client';

import { motion } from "framer-motion";

interface GlassOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
}

export default function GlassOrb({ 
  className = "", 
  size = "md",
  blur = "xl",
  opacity = 0.02 
}: GlassOrbProps) {
  const sizes = {
    sm: "w-48 h-48",
    md: "w-72 h-72",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]"
  };

  const blurs = {
    sm: "blur-2xl",
    md: "blur-3xl",
    lg: "blur-[100px]",
    xl: "blur-[120px]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`absolute rounded-full pointer-events-none ${sizes[size]} ${blurs[blur]} ${className}`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
    />
  );
}
