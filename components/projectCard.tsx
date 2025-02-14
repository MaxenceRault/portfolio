"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  isSelected,
  onSelect,
}: ProjectProps) {
  return (
    <motion.div
      className="relative group w-80 p-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
        {/* Image du projet */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="object-cover w-full h-40 transition-transform duration-500"
          />
        </motion.div>

        {/* Titre & Description courte */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white text-center">{title}</h3>
          <p className="text-sm text-gray-300 text-center mt-2">
            {description.substring(0, 50)}...
          </p>

          {/* ✅ Bouton "Voir les détails" */}
          <div className="flex justify-center mt-4">
            <motion.button
              onClick={onSelect}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 text-white rounded-lg shadow-md transition ${
                isSelected ? "bg-secondary" : "bg-primary hover:bg-secondary"
              }`}
            >
              {isSelected ? "Masquer les détails" : "Voir les détails"}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
