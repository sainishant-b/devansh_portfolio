'use client';

import type { ReactNode } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const headingStyle = { fontFamily: "var(--font-syne)" };
  
  return (
     <>
        {/* Phase 1: The Problem (Both Aligned to Right) */}
        <Section 
            opacity={useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0])} 
            y={useTransform(scrollYProgress, [0.1, 0.3], [20, -20])} 
            // CHANGED: flex-col items-end (Stacks everything on the right)
            className="flex-col items-end justify-center px-12 md:px-20 pt-20"
        >
            {/* Top Text: "Building AI systems" -> Moved to Right */}
            <div className="text-right mb-2">
                <h2 className="text-5xl md:text-7xl font-bold max-w-[600px] leading-tight text-white" style={headingStyle}>
                    Building AI systems
                </h2>
            </div>

            {/* Bottom Text: "for business problems" -> Stays on Right */}
            <div className="text-right">
                <h2 className="text-5xl md:text-7xl font-bold max-w-[600px] leading-tight" style={headingStyle}>
                    <span className="text-blue-200">for business problems</span>
                </h2>
            </div>
        </Section>

        {/* Phase 2: The Solution (Left Side - Cheek/Neck Area) */}
        <Section 
            opacity={useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1, 0])} 
            y={useTransform(scrollYProgress, [0.35, 0.6], [20, -20])} 
            className="justify-start items-center pl-2 md:pl-8"
        >
             <h2 className="text-5xl md:text-7xl font-bold max-w-[600px] leading-tight text-white text-left" style={headingStyle}>
                Reliable automation<br/>
                <span className="text-blue-200">& custom LLMs</span>
             </h2>
        </Section>

        {/* Phase 3: The Identity (Bottom - Collar Area) */}
        <Section 
            opacity={useTransform(scrollYProgress, [0.7, 0.8], [0, 1])} 
            y={useTransform(scrollYProgress, [0.7, 0.9], [30, 0])} 
            className="items-end justify-center pb-32 md:pb-40"
        >
            <div className="w-full max-w-[1600px] grid grid-cols-2 gap-10 md:gap-20 lg:gap-40 px-4">
                <div className="text-right pr-4 md:pr-12 lg:pr-32 xl:pr-40">
                    <h1 className="text-slate-300 text-[3.675rem] md:text-[5.88rem] lg:text-[7.84rem] font-bold tracking-tighter leading-none" style={headingStyle}>
                        Devansh
                    </h1>
                </div>
                <div className="text-left pl-0 md:pl-8 lg:pl-24 xl:pl-32">
                    <h1 className="text-slate-300 text-[3.675rem] md:text-[5.88rem] lg:text-[7.84rem] font-bold tracking-tighter leading-none" style={headingStyle}>
                        Bagaria
                    </h1>
                </div>
            </div>
        </Section>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
        </motion.div>
     </>
  );
}

interface SectionProps {
    children: ReactNode;
    opacity: MotionValue<number>;
    y: MotionValue<number>;
    className?: string;
}

function Section({ children, opacity, y, className = "" }: SectionProps) {
    return (
        <motion.div 
            style={{ opacity, y }}
            className={`absolute inset-0 flex pointer-events-none ${className}`}
        >
            {children}
        </motion.div>
    );
}
