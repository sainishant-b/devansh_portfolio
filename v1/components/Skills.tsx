'use client';

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "Serverless"] },
  { category: "Tools & DevOps", items: ["Git", "VS Code", "Docker", "Vercel", "Figma", "Jest"] },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[50vh] w-full py-20 px-5 md:px-10 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations - optional, can be removed if using global background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/10 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
