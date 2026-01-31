'use client';

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="min-h-[50vh] w-full py-20 px-5 md:px-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
           className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          <p className="mb-6">
            I'm a passionate developer with a keen eye for design and a love for building immersive web experiences. 
            My journey bridges the gap between creative visual storytelling and robust engineering.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, refining my design craft, 
            or thinking about the next big idea that can push the boundaries of the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
