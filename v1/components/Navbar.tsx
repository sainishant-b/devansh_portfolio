'use client';

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Lenis from "lenis";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Get Lenis instance from window (set by SmoothScroll component)
  useEffect(() => {
    const checkForLenis = () => {
      if (window.lenis) {
        setLenis(window.lenis);
      }
    };
    
    checkForLenis();
    const interval = setInterval(checkForLenis, 100);
    
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, {
        offset: -100,
        duration: 1.5,
      });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMobileMenuOpen(false);
  }, [lenis]);

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [lenis]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Minimal Text */}
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className="text-sm font-medium text-white/70 tracking-[0.2em] uppercase z-50 hover:text-white transition-colors duration-300"
          >
            Devansh
          </Link>

          {/* Desktop Navigation - Liquid Glass Pill */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-white/[0.03] backdrop-blur-2xl rounded-full px-2 py-1.5 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-5 py-2 text-xs font-medium tracking-wider text-white/60 hover:text-white transition-all duration-300 rounded-full hover:bg-white/[0.08] cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Button - Liquid Glass */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-2.5 text-xs font-medium tracking-wider text-white bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300 rounded-full cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.05)]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#b8c5b9] z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Liquid Glass */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 bg-white/[0.05] backdrop-blur-2xl rounded-2xl border border-white/[0.1] md:hidden overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3 text-sm tracking-wider text-white/60 hover:text-white hover:bg-white/[0.08] rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2 border-t border-white/[0.08] mt-2"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block px-4 py-3 text-sm font-medium tracking-wider text-white bg-white/[0.1] text-center rounded-xl hover:bg-white/[0.15] transition-all duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
