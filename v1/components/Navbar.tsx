'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Minimal Text */}
          <Link 
            href="/" 
            className="text-sm font-medium text-[#b8c5b9] tracking-[0.2em] uppercase z-50 hover:text-white transition-colors duration-300"
          >
            Devansh
          </Link>

          {/* Desktop Navigation - Pill Shaped */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#252525]/60 backdrop-blur-sm rounded-full px-2 py-1.5 border border-[#333]/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 text-xs font-medium tracking-wider text-[#9aaa9b] hover:text-[#b8c5b9] transition-all duration-300 rounded-full hover:bg-[#333]/50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button - Pill Shaped */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-6 py-2.5 text-xs font-medium tracking-wider text-[#1a1a1a] bg-[#b8c5b9] hover:bg-[#a5b2a6] transition-all duration-300 rounded-full"
            >
              Contact
            </Link>
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 bg-[#1f1f1f]/95 backdrop-blur-lg rounded-2xl border border-[#333]/50 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm tracking-wider text-[#9aaa9b] hover:text-[#b8c5b9] hover:bg-[#333]/30 rounded-xl transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2 border-t border-[#333]/50 mt-2"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium tracking-wider text-[#1a1a1a] bg-[#b8c5b9] text-center rounded-xl hover:bg-[#a5b2a6] transition-all duration-300"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
