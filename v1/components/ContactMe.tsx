'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

type ContactNode = {
  label: string;
  href: string;
  icon: typeof Phone;
  external?: boolean;
};

type ContactAccent = {
  rgb: string;
  textOnDark: string;
  textOnLight: string;
};

const emailAddress = "devanshbagaria07@gmail.com";

const contactAccents: Record<string, ContactAccent> = {
  default: {
    rgb: "34,211,238",
    textOnDark: "#a5f3fc",
    textOnLight: "#155e75",
  },
  Phone: {
    rgb: "52,211,153",
    textOnDark: "#86efac",
    textOnLight: "#065f46",
  },
  LinkedIn: {
    rgb: "59,130,246",
    textOnDark: "#bfdbfe",
    textOnLight: "#1e3a8a",
  },
  GitHub: {
    rgb: "15,23,42",
    textOnDark: "#e2e8f0",
    textOnLight: "#020617",
  },
  Mail: {
    rgb: "245,158,11",
    textOnDark: "#fde68a",
    textOnLight: "#78350f",
  },
};

function rgba(rgb: string, alpha: number): string {
  return `rgba(${rgb}, ${alpha})`;
}

function getContactVisuals(label: string, isDark: boolean, isActive: boolean) {
  const accent = contactAccents[label] ?? contactAccents.default;
  const neutralRgb = isDark ? "34,211,238" : "8,145,178";
  if (isDark) {
    if (!isActive) {
      return {
        beamFrom: rgba(neutralRgb, 0.56),
        tileBorder: rgba(neutralRgb, 0.34),
        tileBg: rgba(neutralRgb, 0.12),
        icon: rgba(neutralRgb, 0.78),
        labelText: rgba(neutralRgb, 0.82),
        labelBorder: rgba(neutralRgb, 0.26),
        labelBg: rgba(neutralRgb, 0.12),
      };
    }

    return {
      beamFrom: rgba(accent.rgb, 0.92),
      tileBorder: rgba(accent.rgb, 0.78),
      tileBg: rgba(accent.rgb, 0.32),
      icon: accent.textOnDark,
      labelText: accent.textOnDark,
      labelBorder: rgba(accent.rgb, 0.56),
      labelBg: rgba(accent.rgb, 0.24),
    };
  }

  if (!isActive) {
    return {
      beamFrom: rgba(neutralRgb, 0.44),
      tileBorder: rgba(neutralRgb, 0.3),
      tileBg: rgba(neutralRgb, 0.08),
      icon: rgba(neutralRgb, 0.8),
      labelText: rgba(neutralRgb, 0.82),
      labelBorder: rgba(neutralRgb, 0.22),
      labelBg: rgba(neutralRgb, 0.08),
    };
  }

  return {
    beamFrom: rgba(accent.rgb, 0.78),
    tileBorder: rgba(accent.rgb, 0.66),
    tileBg: rgba(accent.rgb, 0.22),
    icon: accent.textOnLight,
    labelText: accent.textOnLight,
    labelBorder: rgba(accent.rgb, 0.45),
    labelBg: rgba(accent.rgb, 0.18),
  };
}

const projectorContacts: ContactNode[] = [
  {
    label: "Phone",
    href: "tel:+917439234828",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devansh-bagaria-167921300/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/devansh7439",
    icon: Github,
    external: true,
  },
  {
    label: "Mail",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`,
    icon: Mail,
    external: true,
  },
];

export default function ContactMe() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section  className="min-h-[60vh] w-full py-20 px-5 md:px-10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)'
            : 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="contact"
          viewport={{ once: true }}
          className={`uppercase tracking-widest text-sm mb-4 block ${isDark ? 'text-white/40' : 'text-gray-600'}`}
        >
          What&apos;s Next?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-gravitas-one)" }}
          className={`text-5xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          <span className={`about-heading-aurora ${isDark ? "about-heading-aurora--dark" : "about-heading-aurora--light"}`}>
            <span className="about-heading-aurora__text">Get In Touch</span>
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            className={`ml-1 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}
          >
            _
          </motion.span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`w-16 h-px mx-auto mt-6 mb-8 ${isDark ? 'bg-white/30' : 'bg-black/30'}`}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-poppins)" }}
          className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 ${isDark ? 'text-white/60' : 'text-gray-700'}`}
        >
          Hover the projector base to reveal phone, LinkedIn, GitHub, and mail channels. On mobile, tap the base to activate the hologram.
        </motion.p>

        <HolographicProjector isDark={isDark} />
      </div>
    </section>
  );
}

function HolographicProjector({ isDark }: { isDark: boolean }) {
  const [isProjecting, setIsProjecting] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    // Generate static random particles so they don't cause hydration mismatch
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1.5 + Math.random() * 2,
      size: 1 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      onMouseEnter={() => { if (!isTouchDevice) setIsProjecting(true); }}
      onMouseLeave={() => { if (!isTouchDevice) setIsProjecting(false); }}
      onFocusCapture={() => setIsProjecting(true)}
      onBlurCapture={() => setIsProjecting(false)}
      className="relative mx-auto w-[min(760px,97vw)] h-[380px] sm:h-[420px] select-none"
    >
      {/* Status indicator */}
      <motion.div
        className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] tracking-[0.2em] uppercase border backdrop-blur-md ${
          isDark
            ? 'border-cyan-200/40 bg-cyan-400/10 text-cyan-100/90 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
            : 'border-cyan-700/30 bg-cyan-500/10 text-cyan-800/80 shadow-[0_0_15px_rgba(8,145,178,0.2)]'
        }`}
        animate={{
          opacity: isProjecting ? [0.72, 1, 0.82] : 0.62,
          boxShadow: isProjecting 
            ? (isDark ? ["0 0 15px rgba(34,211,238,0.2)", "0 0 25px rgba(34,211,238,0.5)", "0 0 15px rgba(34,211,238,0.2)"] : ["0 0 15px rgba(8,145,178,0.2)", "0 0 25px rgba(8,145,178,0.5)", "0 0 15px rgba(8,145,178,0.2)"])
            : "0 0 15px transparent"
        }}
        transition={{ duration: 1.1, repeat: isProjecting ? Infinity : 0 }}
      >
        {isTouchDevice ? (isProjecting ? "Tap base to hide" : "Tap base to reveal") : (isProjecting ? "Data Stream Active" : "Hover to activate")}
      </motion.div>

      {/* Floor reflection */}
      <motion.div
        className={`absolute bottom-3 left-1/2 h-14 w-[330px] md:w-[420px] -translate-x-1/2 rounded-full blur-2xl ${
          isDark ? 'bg-cyan-400/40' : 'bg-cyan-500/30'
        }`}
        animate={{
          opacity: isProjecting ? 0.85 : 0.3,
          scale: isProjecting ? 1.25 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Ambient hologram aura */}
      <motion.div
        className="absolute left-1/2 bottom-[92px] h-[220px] w-[320px] md:w-[460px] -translate-x-1/2 rounded-full pointer-events-none blur-[40px]"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 60%, rgba(56,189,248,0.5) 0%, rgba(34,211,238,0.25) 45%, rgba(34,211,238,0) 80%)"
            : "radial-gradient(circle at 50% 60%, rgba(8,145,178,0.4) 0%, rgba(6,182,212,0.15) 45%, rgba(6,182,212,0) 80%)",
        }}
        animate={{
          opacity: isProjecting ? [0.35, 0.75, 0.45] : 0.15,
          scale: isProjecting ? [0.94, 1.1, 0.98] : 0.9,
        }}
        transition={{ duration: 2.2, repeat: isProjecting ? Infinity : 0, ease: "easeInOut" }}
      />

      {/* 3D Core / Orbital hologram rings */}
      <motion.div
        className="absolute bottom-[116px] left-1/2 w-32 h-32 -translate-x-1/2 pointer-events-none"
        style={{ perspective: "600px" }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full border-[2px] ${isDark ? 'border-cyan-300/60' : 'border-cyan-600/40'}`}
          animate={isProjecting ? { rotateX: [0, 360], rotateY: [0, 180], opacity: [0.3, 0.9, 0.3] } : { rotateX: 60, opacity: 0 }}
          transition={{ duration: 4, repeat: isProjecting ? Infinity : 0, ease: "linear" }}
        />
        <motion.div
          className={`absolute inset-[-10px] rounded-full border border-dashed ${isDark ? 'border-cyan-200/50' : 'border-cyan-700/30'}`}
          animate={isProjecting ? { rotateY: [0, -360], rotateZ: [0, 90], opacity: [0.2, 0.6, 0.2] } : { rotateX: 70, opacity: 0 }}
          transition={{ duration: 5, repeat: isProjecting ? Infinity : 0, ease: "linear" }}
        />
        <motion.div
          className={`absolute inset-[15px] rounded-full border-[3px] border-dotted ${isDark ? 'border-sky-300/70' : 'border-sky-600/50'}`}
          animate={isProjecting ? { rotateZ: [0, 360], rotateX: [0, -180], opacity: [0.4, 1, 0.4] } : { rotateX: 50, opacity: 0 }}
          transition={{ duration: 3.5, repeat: isProjecting ? Infinity : 0, ease: "linear" }}
        />
      </motion.div>

      {/* Hologram beam base core pulse */}
      <motion.div
        className={`absolute bottom-[80px] left-1/2 h-24 w-24 -translate-x-1/2 rounded-full pointer-events-none ${
          isDark ? 'bg-cyan-300/20' : 'bg-cyan-600/15'
        }`}
        style={{ filter: "blur(10px)" }}
        animate={
          isProjecting
            ? { opacity: [0.4, 0.8, 0.4], scale: [0.8, 1.4, 0.8] }
            : { opacity: 0, scale: 0.4 }
        }
        transition={{ duration: 1.5, repeat: isProjecting ? Infinity : 0, ease: "easeInOut" }}
      />
      
      {/* Additional Emission ring */}
      <motion.div
        className={`absolute bottom-[82px] left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border pointer-events-none ${
          isDark ? 'border-cyan-100/60' : 'border-cyan-600/40'
        }`}
        animate={
          isProjecting
            ? { opacity: [0.9, 0, 0], scale: [0.4, 2, 2.5] }
            : { opacity: 0, scale: 0.4 }
        }
        transition={{ duration: 1.2, repeat: isProjecting ? Infinity : 0, ease: "easeOut" }}
      />

      {/* Glowing Vertical Column Core */}
      <motion.div
        className="absolute bottom-16 left-1/2 w-[60px] h-[220px] -translate-x-1/2 pointer-events-none blur-[15px]"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(34,211,238,0.6) 0%, rgba(56,189,248,0.2) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(8,145,178,0.4) 0%, rgba(6,182,212,0.1) 60%, transparent 100%)",
        }}
        animate={{ opacity: isProjecting ? [0.4, 0.8, 0.4] : 0, scaleY: isProjecting ? 1 : 0 }}
        transition={{ duration: 2, repeat: isProjecting ? Infinity : 0 }}
      />

      {/* Main Hologram beam (trapezoid) */}
      <motion.div
        className="absolute bottom-16 left-1/2 h-[220px] w-[280px] -translate-x-1/2 pointer-events-none overflow-hidden"
        style={{
          clipPath: "polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)",
          background: isDark
            ? "linear-gradient(180deg, rgba(56,189,248,0.6) 0%, rgba(34,211,238,0.22) 45%, rgba(56,189,248,0.02) 100%)"
            : "linear-gradient(180deg, rgba(8,145,178,0.45) 0%, rgba(6,182,212,0.15) 45%, rgba(8,145,178,0.02) 100%)",
          filter: "blur(0.5px)",
          transformOrigin: "bottom"
        }}
        animate={{
          opacity: isProjecting ? 1 : 0,
          scaleY: isProjecting ? 1 : 0.62,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Beam internal textures */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 1px, transparent 4px, transparent 8px)",
            mixBlendMode: "screen",
          }}
          animate={isProjecting ? { backgroundPositionY: ["0px", "24px"] } : { backgroundPositionY: "0px" }}
          transition={{ duration: 0.3, repeat: isProjecting ? Infinity : 0, ease: "linear" }}
        />
        
        {/* Scanning Laser Line */}
        <motion.div
          className={`absolute left-0 right-0 h-[2px] blur-[1px] ${
            isDark ? 'bg-cyan-200' : 'bg-cyan-600'
          }`}
          style={{ boxShadow: isDark ? "0 0 10px 2px rgba(165,243,252,0.8)" : "0 0 10px 2px rgba(8,145,178,0.8)" }}
          animate={isProjecting ? { top: ["0%", "100%", "0%"] } : { top: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Data Particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${isDark ? 'bg-cyan-200/80 shadow-[0_0_4px_rgba(165,243,252,1)]' : 'bg-cyan-600/70 shadow-[0_0_4px_rgba(8,145,178,1)]'}`}
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`,
              bottom: "0%"
            }}
            animate={isProjecting ? { 
              bottom: ["0%", "100%"],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 20 - 10, 0] // sway
            } : { bottom: "0%", opacity: 0 }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}

        {/* Central bright core line */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2"
          style={{
            background: isDark
              ? "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(186,230,253,0.8) 20%, rgba(56,189,248,0.5) 60%, rgba(56,189,248,0) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(14,116,144,0.7) 20%, rgba(6,182,212,0.4) 60%, rgba(6,182,212,0) 100%)",
            filter: "blur(1px)",
          }}
          animate={isProjecting ? { opacity: [0.6, 1, 0.7] } : { opacity: 0 }}
          transition={{ duration: 0.4, repeat: isProjecting ? Infinity : 0, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hologram nodes */}
      <motion.div
        className="absolute left-1/2 bottom-[165px] -translate-x-1/2 flex items-end justify-center gap-3 sm:gap-5 md:gap-7"
        animate={{
          opacity: isProjecting ? 1 : 0,
          y: isProjecting ? 0 : 30,
          scale: isProjecting ? 1 : 0.8,
        }}
        transition={{ duration: 0.35, ease: "easeOut", type: "spring", bounce: 0.4 }}
      >
        {projectorContacts.map((contact, index) => (
          <HologramContactNode
            key={contact.label}
            contact={contact}
            index={index}
            isProjecting={isProjecting}
            isDark={isDark}
          />
        ))}
      </motion.div>

      {/* Projector base */}
      <button
        type="button"
        aria-label="Toggle contact projector"
        aria-pressed={isProjecting}
        onClick={() => setIsProjecting((prev) => !prev)}
        className="group/projector absolute bottom-0 left-1/2 h-[98px] w-[min(340px,92vw)] md:w-[440px] -translate-x-1/2 rounded-[36px] focus:outline-none focus-visible:outline-none"
      >
        {/* 3D Base Body */}
        <div
          className={`absolute inset-0 rounded-[36px] border-[1.5px] backdrop-blur-2xl ${
            isDark
              ? 'border-cyan-300/30 bg-gradient-to-b from-cyan-950/60 via-slate-900/40 to-black/80 shadow-[0_30px_70px_rgba(8,145,178,0.35)]'
              : 'border-cyan-700/20 bg-gradient-to-b from-cyan-50/90 via-white/80 to-slate-200/60 shadow-[0_20px_50px_rgba(34,211,238,0.25)]'
          }`}
          style={{ transform: "perspective(1200px) rotateX(62deg)", transformOrigin: "center bottom" }}
        >
           {/* Internal lit ring */}
           <motion.div 
             className={`absolute inset-2 rounded-[28px] border ${isDark ? 'border-cyan-400/20' : 'border-cyan-600/15'}`}
             animate={{ opacity: isProjecting ? [0.3, 0.7, 0.3] : 0.2 }}
             transition={{ duration: 2, repeat: Infinity }}
           />
        </div>
        
        {/* Base emission line */}
        <motion.div
          className={`absolute inset-x-10 top-[26px] h-[2px] pointer-events-none blur-[1px] ${
            isDark ? 'bg-cyan-300/80 shadow-[0_0_8px_rgba(103,232,249,0.8)]' : 'bg-cyan-600/80 shadow-[0_0_8px_rgba(8,145,178,0.8)]'
          }`}
          animate={isProjecting ? { opacity: [0.4, 1, 0.5], scaleX: [0.86, 1.05, 0.92] } : { opacity: 0.2, scaleX: 0.9 }}
          transition={{ duration: 1.2, repeat: isProjecting ? Infinity : 0, ease: "easeInOut" }}
        />

        {/* Projector Lens / Source */}
        <motion.div
          className={`absolute left-1/2 top-[42px] h-8 w-20 -translate-x-1/2 rounded-[100%] border-2 ${
            isDark ? 'border-cyan-200/70 bg-cyan-400/40' : 'border-cyan-700/50 bg-cyan-500/40'
          }`}
          animate={{
            opacity: isProjecting ? [0.6, 1, 0.7] : 0.4,
            boxShadow: isProjecting
              ? (isDark 
                  ? ["0 0 10px rgba(34,211,238,0.4), inset 0 0 10px rgba(255,255,255,0.6)", "0 0 30px rgba(34,211,238,0.8), inset 0 0 15px rgba(255,255,255,0.9)", "0 0 10px rgba(34,211,238,0.4), inset 0 0 10px rgba(255,255,255,0.6)"]
                  : ["0 0 10px rgba(8,145,178,0.4), inset 0 0 10px rgba(255,255,255,0.6)", "0 0 30px rgba(8,145,178,0.7), inset 0 0 15px rgba(255,255,255,0.9)", "0 0 10px rgba(8,145,178,0.4), inset 0 0 10px rgba(255,255,255,0.6)"])
              : "0 0 0 transparent",
            scale: isProjecting ? [0.95, 1.05, 0.95] : 1
          }}
          transition={{ duration: 0.8, repeat: isProjecting ? Infinity : 0, ease: "easeInOut" }}
        />

        <span className="sr-only">
          {isProjecting ? "Deactivate hologram" : "Activate hologram"}
        </span>
      </button>
    </motion.div>
  );
}

function HologramContactNode({
  contact,
  index,
  isProjecting,
  isDark,
}: {
  contact: ContactNode;
  index: number;
  isProjecting: boolean;
  isDark: boolean;
}) {
  const Icon = contact.icon;
  const [isHovered, setIsHovered] = useState(false);
  const isActive = isProjecting && isHovered;
  const accent = contactAccents[contact.label] ?? contactAccents.default;
  const visuals = getContactVisuals(contact.label, isDark, isActive);
  const neutralGlowRgb = isDark ? "34,211,238" : "8,145,178";
  const glowRgb = isActive ? accent.rgb : neutralGlowRgb;
  const softGlow = `0 0 8px ${rgba(glowRgb, isDark ? (isActive ? 0.28 : 0.16) : isActive ? 0.18 : 0.12)}`;
  const midGlow = `0 0 16px ${rgba(glowRgb, isDark ? (isActive ? 0.42 : 0.24) : isActive ? 0.3 : 0.18)}`;
  const strongGlow = `0 0 28px ${rgba(glowRgb, isDark ? (isActive ? 0.62 : 0.32) : isActive ? 0.45 : 0.24)}`;

  return (
    <motion.a
      href={contact.href}
      target={contact.external ? "_blank" : undefined}
      rel={contact.external ? "noopener noreferrer" : undefined}
      aria-label={contact.label}
      className="relative flex flex-col items-center gap-2 focus:outline-none focus-visible:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      animate={{
        opacity: isProjecting ? 1 : 0,
        y: isProjecting ? 0 : 14,
      }}
      transition={{ duration: 0.2, delay: index * 0.08 }}
      whileHover={isProjecting ? { y: -4, scale: 1.03 } : undefined}
      whileTap={{ scale: 0.96 }}
      style={{ pointerEvents: isProjecting ? "auto" : "none" }}
    >
      <motion.div
        className="absolute left-1/2 top-[calc(100%-10px)] h-12 w-px -translate-x-1/2 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${visuals.beamFrom} 0%, rgba(0,0,0,0) 88%)`,
        }}
        animate={isProjecting ? { opacity: isActive ? [0.36, 1, 0.56] : [0.2, 0.72, 0.34] } : { opacity: 0 }}
        transition={{ duration: 0.6, repeat: isProjecting ? Infinity : 0, delay: index * 0.1 }}
      />

      <motion.div
        className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl border overflow-hidden"
        style={{
          borderColor: visuals.tileBorder,
          backgroundColor: visuals.tileBg,
        }}
        animate={
          isProjecting
            ? {
                x: [0, isActive ? -1.6 : -0.9, isActive ? 1.3 : 0.8, 0],
                y: [0, isActive ? -2.2 : -1.4, isActive ? 1.1 : 0.7, 0],
                opacity: isActive ? [0.86, 1, 0.92] : [0.68, 0.94, 0.8],
                boxShadow: isActive ? [softGlow, strongGlow, midGlow] : [softGlow, midGlow, softGlow],
              }
            : { x: 0, y: 0, opacity: 0.2 }
        }
        transition={{
          duration: isActive ? 0.2 : 0.26,
          repeat: isProjecting ? Infinity : 0,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.32) 0px, rgba(255,255,255,0.32) 1px, transparent 3px, transparent 7px)",
          }}
          animate={isProjecting ? { backgroundPositionY: ["0px", "14px"] } : { backgroundPositionY: "0px" }}
          transition={{ duration: 0.2, repeat: isProjecting ? Infinity : 0, ease: "linear" }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-7 w-7 md:h-8 md:w-8 transition-colors duration-200" style={{ color: visuals.icon }} />
        </div>
      </motion.div>

      <span
        className="px-2.5 py-1 rounded-full text-[10px] md:text-xs tracking-[0.16em] uppercase border transition-colors duration-200"
        style={{
          color: visuals.labelText,
          borderColor: visuals.labelBorder,
          backgroundColor: visuals.labelBg,
        }}
      >
        {contact.label}
      </span>
    </motion.a>
  );
}
