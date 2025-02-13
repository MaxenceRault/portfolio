"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  videoUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <motion.div
      className="relative group w-full   p-4"
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
            className="object-cover w-full h-48 transition-transform duration-500"
          />
        </motion.div>

        {/* Overlay Animé */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
        >
          <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
          <p className="text-sm text-gray-300 mb-4 text-center">{description}</p>

          {/* Liens Boutons */}
          <div className="flex gap-3">
            <Link href={videoUrl} passHref>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:underline transition"
              >
                🎥 Watch Video
              </motion.button>
            </Link>
            <Link href={githubUrl} passHref>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:underline transition"
              >
                💻 GitHub
              </motion.button>
            </Link>
            <Link href={liveUrl} passHref>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:underline transition"
              >
                🚀 Live Site
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
