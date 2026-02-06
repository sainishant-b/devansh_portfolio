'use client';

import { motion } from "framer-motion";

const skills = [
  { category: "AI & Machine Learning", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "Computer Vision", "NLP"] },
  { category: "Frontend & Data Viz", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "D3.js", "Plotly", "Streamlit", "Framer Motion"] },
  { category: "Backend & MLOps", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Docker", "AWS", "MLflow", "Hugging Face"] },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[50vh] w-full py-20 px-5 md:px-10 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations - Liquid Glass Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative h-full"
            >
              {/* Liquid Glass Card */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.36)] p-8 transition-all duration-500 group-hover:border-white/[0.15] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col">
                {/* Inner gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                
                <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/[0.08] pb-3 relative flex-shrink-0">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 relative flex-grow content-start">
                  {category.items.map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white rounded-lg text-sm transition-all duration-300 border border-white/[0.05] hover:border-white/[0.15] cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
