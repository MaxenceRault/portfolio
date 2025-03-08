"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative group lg:w-1/2"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6"
      >
        Développeur
        <br />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
        >
          Full Stack
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="text-xl text-content/80 mb-8"
      >
        Développeur Full-Stack spécialisé en React.js, Node.js et technologies
        modernes du web. Actuellement en 2ème année de Coding & Digital
        Innovation à IIM Digital School. Actuellement à la recherche de stage de
        3 à 4 mois à partir d&apos;avril 2025 et d&apos;une alternance à partir de
        septembre 2025.
      </motion.p>

      <div className="flex space-x-4">
        <Link href="/projects">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group"
          >
            <span className="text-content group-hover:text-primary transition-colors">
              Voir mes projets
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </Link>

        <Link href="/pdf/Maxence_Rault_CV.pdf" download target="_blank">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group"
          >
            <span className="text-content group-hover:text-primary transition-colors">
              Télécharger CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
