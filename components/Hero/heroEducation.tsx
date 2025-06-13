"use client";
import { useState } from "react";
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

const professionalData = [

  {
    year : "Mars 2025 - Juin 2025",
    title: "Analyste Front End",
    description: "Mise en place d'une web app en NextJS sur la plateforme Arimayi",
    tech: ["NextJS","Redux", "AntDesign"],

  },  
  {
    year : "Janvier 2025 - Mars 2025",
    title: "Bourse aux Projets",
    description: "Chef de Projet",
    tech: ["Gestion de projet", "Communication", "Organisation", "Leadership"],

  },  

  {
    year : "Septembre 2024 - Décembre 2024",
    title: "Bourse aux Projets",
    description: "Développeur Front End",
    tech: ["ReactJS", "TailwindCSS", "Git"],

  },  

  { 
    year: "Été 2024",
    title: "Saisonnier Intermarché",
    description: "Employé mise en place rayon frais",
    tech: ["Résolution de problèmes", "Gestion du temps"],
  },
  {
    year: "Été 2023",
    title: "Saisonnier Intermarché",
    description: "Employé Boucherie",
    tech: ["Coopération en équipe"],
  },
];

export default function HeroEducation() {
  const [activeTab, setActiveTab] = useState("Éducation");

  const data = activeTab === "Éducation" ? educationData : professionalData;

  return (
    <div className="relative max-w-4xl mx-auto mt-16">
      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {["Éducation", "Professionel"].map((tab) => (
          <motion.button
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className={`relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group ${
              activeTab === tab ? "bg-primary text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="text-content group-hover:text-primary transition-colors capitalize">
              {tab}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-primary pl-6 space-y-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Point */}
            <div className="absolute -left-[18px] w-4 h-4 bg-primary rounded-full"></div>

            {/* Content */}
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
