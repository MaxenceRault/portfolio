"use client";
import { motion } from "framer-motion";
import HardSkill from "./hardSkill";

export default function HeroSkills() {
const hardSkills = [
    { name: "HTML", icon: "/icons/HTML.svg" },
    { name: "CSS", icon: "/icons/CSS.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "React", icon: "/icons/React-Dark.svg" },
    { name: "Node.js", icon: "/icons/NodeJS-Dark.svg" },
    { name: "PHP", icon: "/icons/PHP-Dark.svg" },
    { name: "MySQL", icon: "/icons/MySQL-Dark.svg" },
    { name: "Next.js", icon: "/icons/NextJS-Dark.svg" },
    { name: "Symfony", icon: "/icons/Symfony-Dark.svg" },
    { name: "SaaS", icon: "/icons/Sass.svg" },
    { name: "Git", icon: "/icons/Git.svg" },
    { name: "Figma", icon: "/icons/Figma-Dark.svg" },
    { name: "Python", icon: "/icons/Python-Dark.svg" },
];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Collaboration",
    "Creativity",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 mt-16">
      {/* Hard Skills */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl shadow-lg border border-white/20"
      >
        {/* Effet de lueur */}
        <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-40"></div>

        <h2 className="text-3xl font-bold text-primary mb-6 text-center">🛠 Hard Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {hardSkills.map((skill, index) => (
            <HardSkill key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl shadow-lg border border-white/20"
      >
        {/* Effet de lueur */}
        <div className="absolute inset-0 bg-secondary/10 blur-3xl opacity-40"></div>

        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">💡 Soft Skills</h2>

        <ul className="mt-4 space-y-3 text-center">
          {softSkills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-lg text-content/80 font-semibold tracking-wide"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <br />
    </div>
  );
}
