"use client";
import { motion } from "framer-motion";

const educationData = [
    {
        year: "2023 - Présent",
        title: "IIM Digital School",
        description: "Bachelor Coding & Digital Innovation",
        tech: ["JavaScript", "ReactJS", "Node.js", "PHP", "MySQL", "Symfony", "NextJS", "TailwindCSS", "Figma", "Sass", "Git", "TypeScript"]
    },
    {
        year: "2020 - 2023",
        title: "Bac Général",
        description: "Spécialité Mathématiques & NSI",
        tech: ["HTML", "CSS", "Python"],
    },
    
];

export default function HeroEducation() {
  return (
    <div className="relative max-w-4xl mx-auto mt-16">
      

      {/* Frise technologique */}
      <div className="relative border-l-4 border-primary pl-6 space-y-8">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Point de la frise */}
            <div className="absolute -left-[18px] w-4 h-4 bg-primary rounded-full"></div>

            {/* Contenu */}
            <div className="bg-surface p-6 rounded-xl shadow-lg border border-white/10">
              <span className="text-tertiary font-semibold">{item.year}</span>
              <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
              <p className="text-content/80 mt-2">{item.description}</p>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm bg-gray-800 rounded-md text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
