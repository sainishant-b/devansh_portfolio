'use client';

import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Project } from "@/lib/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const getCardWidth = useCallback(() => {
    if (typeof window === 'undefined') return 500;
    return window.innerWidth >= 768 ? 524 : 374; // card width + gap
  }, []);

  const checkScrollability = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Use requestAnimationFrame for smoother scroll detection
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            checkScrollability();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      container.addEventListener('scroll', handleScroll, { passive: true });
      checkScrollability();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [checkScrollability]);

  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (isScrolling || !scrollContainerRef.current) return;
    
    setIsScrolling(true);
    const cardWidth = getCardWidth();
    const container = scrollContainerRef.current;
    const currentScroll = container.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - cardWidth 
      : currentScroll + cardWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 500);
  }, [isScrolling, getCardWidth]);

  const scrollLeft = () => scrollTo('left');
  const scrollRight = () => scrollTo('right');

  if (projects.length === 0) {
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
        <div className="text-center text-white/50 py-20">
          <p className="text-2xl font-light tracking-widest uppercase">Coming Soon</p>
        </div>
      </section>
    );
  }

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

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow - Water Drop Effect - Aligned with project cards */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: canScrollLeft ? 1 : 0, x: canScrollLeft ? 0 : -20 }}
          onClick={scrollLeft}
          disabled={!canScrollLeft || isScrolling}
          className="absolute left-2 md:left-8 top-[150px] md:top-[175px] -translate-y-1/2 z-20 p-3 md:p-4 rounded-full 
            bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent
            backdrop-blur-sm
            border border-white/[0.2] 
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)]
            hover:shadow-[inset_0_2px_2px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,255,255,0.15),0_6px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.1)]
            hover:scale-110
            active:scale-95
            transition-all duration-300 ease-out
            disabled:opacity-0 disabled:cursor-default 
            group/arrow
            overflow-hidden"
          aria-label="Scroll left"
        >
          {/* Water drop highlight - top reflection */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-white/40 rounded-full blur-[1px]" />
          
          {/* Water drop shine */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/60 rounded-full blur-[0.5px]" />
          
          <ChevronLeft className="relative w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover/arrow:text-white transition-colors duration-300 drop-shadow-lg" />
        </motion.button>

        {/* Right Arrow - Water Drop Effect - Aligned with project cards */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: canScrollRight ? 1 : 0, x: canScrollRight ? 0 : 20 }}
          onClick={scrollRight}
          disabled={!canScrollRight || isScrolling}
          className="absolute right-2 md:right-8 top-[150px] md:top-[175px] -translate-y-1/2 z-20 p-3 md:p-4 rounded-full 
            bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent
            backdrop-blur-sm
            border border-white/[0.2] 
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)]
            hover:shadow-[inset_0_2px_2px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,255,255,0.15),0_6px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.1)]
            hover:scale-110
            active:scale-95
            transition-all duration-300 ease-out
            disabled:opacity-0 disabled:cursor-default 
            group/arrow
            overflow-hidden"
          aria-label="Scroll right"
        >
          {/* Water drop highlight - top reflection */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-white/40 rounded-full blur-[1px]" />
          
          {/* Water drop shine */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/60 rounded-full blur-[0.5px]" />
          
          <ChevronRight className="relative w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover/arrow:text-white transition-colors duration-300 drop-shadow-lg" />
        </motion.button>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 px-5 md:px-10 overflow-x-auto overflow-y-hidden pb-8 snap-x snap-mandatory"
          style={{ 
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            overscrollBehaviorX: 'contain',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group/card relative flex-shrink-0 w-[85vw] md:w-[500px] h-[300px] md:h-[350px] rounded-2xl overflow-hidden snap-center transition-all duration-500 hover:scale-[1.02]"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Liquid Glass Card Background */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.36)] group-hover/card:border-white/[0.15] group-hover/card:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500" />
              
              {/* Inner gradient shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent rounded-2xl pointer-events-none" />
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover/card:opacity-30 transition-opacity duration-700 rounded-2xl"
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
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover/card:translate-y-0">
                  {project.description}
                </p>
                
                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Liquid bottom line animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-center" />
            </motion.div>
          ))}
          
          {/* Project Coming Soon Title Card - At the End */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="group/card relative flex-shrink-0 w-[85vw] md:w-[500px] h-[300px] md:h-[350px] rounded-2xl overflow-hidden snap-center transition-all duration-500"
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Liquid Glass Card Background */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.36)] group-hover/card:border-white/[0.15] group-hover/card:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500" />
            
            {/* Inner gradient shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent rounded-2xl pointer-events-none" />
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-50 group-hover/card:opacity-80 transition-opacity duration-700 rounded-2xl" />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl" />
            
            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-4">
                Stay Tuned
              </span>
              <h3 className="text-white font-bold text-4xl md:text-5xl mb-4 tracking-tight bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent">
                Project
              </h3>
              <h3 className="text-white font-bold text-4xl md:text-5xl mb-6 tracking-tight bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent">
                Coming Soon
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                More exciting projects are on the way. Stay tuned for updates!
              </p>
              
              {/* Animated dots */}
              <div className="flex gap-2 mt-8">
                <motion.div 
                  className="w-2 h-2 bg-white/40 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-white/40 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-white/40 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </div>
            
            {/* Liquid bottom line animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 via-white/30 to-pink-500/50 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-center" />
          </motion.div>
          
          {/* Spacer for last item */}
          <div className="flex-shrink-0 w-5 md:w-20" />
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <div
              key={index}
              className="h-1 rounded-full transition-all duration-300 bg-white/20"
              style={{ width: '20px' }}
            />
          ))}
          {/* Dot for Coming Soon card at the end */}
          <div className="h-1 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-500/50 to-pink-500/50" style={{ width: '20px' }} />
        </div>
      </div>
    </section>
  );
}
