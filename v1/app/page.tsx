"use client";

import { useRef } from "react";
import { ScrollyCanvas } from "@/components/custom/ScrollyCanvas";
import Projects  from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/Aboutme";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      {/* Scrollytelling Section */}
      <section className="relative">
        {/* Canvas-based frame sequence */}
        <ScrollyCanvas 
          frameCount={147} 
          framePath="/sequence/webp"
          scrollHeight="500vh"
        />
      </section>
      <AboutMe/>

      <Skills/>
      {/* Projects Section */}
      <Projects />

      {/* Footer / Contact Section */}
      <ContactMe/>
    </main>
  );
}
