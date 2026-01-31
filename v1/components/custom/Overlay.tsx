"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextSection {
  text: string;
  subtext?: string;
  scrollStart: number;
  scrollEnd: number;
  horizontalPosition?: "left" | "center" | "right";
  verticalPosition?: "top" | "center" | "bottom";
}

const textSections: TextSection[] = [
  {
    text: "Devansh Bagaria",
    subtext: "Creative Developer",
    scrollStart: 0,
    scrollEnd: 0.2,
    horizontalPosition: "center",
    verticalPosition: "center",
  },
  {
    text: "I build digital experiences",
    subtext: "that leave lasting impressions",
    scrollStart: 0.25,
    scrollEnd: 0.45,
    horizontalPosition: "left",
    verticalPosition: "center",
  },
  {
    text: "Bridging design and engineering",
    subtext: "with precision and creativity",
    scrollStart: 0.5,
    scrollEnd: 0.7,
    horizontalPosition: "right",
    verticalPosition: "center",
  },
  {
    text: "Let's create something extraordinary",
    subtext: "Scroll to explore my work",
    scrollStart: 0.75,
    scrollEnd: 0.95,
    horizontalPosition: "center",
    verticalPosition: "center",
  },
];

export function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ height: "500vh" }}
    >
      {/* Sticky overlay container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {textSections.map((section, index) => (
          <TextOverlay
            key={index}
            section={section}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface TextOverlayProps {
  section: TextSection;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
}

function TextOverlay({ section, scrollYProgress, index }: TextOverlayProps) {
  // Fade in/out based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [
      section.scrollStart,
      section.scrollStart + 0.05,
      section.scrollEnd - 0.05,
      section.scrollEnd,
    ],
    [0, 1, 1, 0]
  );

  // Parallax movement - alternate directions based on index
  const yOffset = index % 2 === 0 ? -50 : 50;
  const y = useTransform(
    scrollYProgress,
    [section.scrollStart, section.scrollEnd],
    [yOffset, -yOffset]
  );

  const horizontalClasses = {
    left: "items-center justify-start pl-8 md:pl-20",
    center: "items-center justify-center text-center",
    right: "items-center justify-end pr-8 md:pr-20",
  };

  const verticalClasses = {
    top: "pt-20",
    center: "",
    bottom: "pb-20",
  };

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col ${horizontalClasses[section.horizontalPosition || "center"]} ${verticalClasses[section.verticalPosition || "center"]} px-4`}
      style={{ opacity, y }}
    >
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
          {section.text}
        </h2>
        {section.subtext && (
          <p className="mt-4 text-lg md:text-xl text-white/70 font-light tracking-wide">
            {section.subtext}
          </p>
        )}
      </div>
    </motion.div>
  );
}
