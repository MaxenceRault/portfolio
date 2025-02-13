"use client";
import { ParticleCanvas } from "@/hooks/particle";
import { motion } from "framer-motion";
import ProjectCard from "@/components/projectCard"; // Renommé pour plus de clarté

export default function Projects() {
  const projects = [
    {
      title: "NikoGuitarLesson",
      description: "Une web app en ReactJs et en NodeJs",
      imageUrl: "/nikoguitarlesson.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      githubUrl: "https://github.com/MaxenceRault/project1",
      liveUrl: "https://nikoguitarlesson.fr",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "/images/project2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      githubUrl: "https://github.com/MaxenceRault/project2",
      liveUrl: "https://project2.example.com",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "/images/project2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      githubUrl: "https://github.com/MaxenceRault/project2",
      liveUrl: "https://project2.example.com",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "/images/project2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      githubUrl: "https://github.com/MaxenceRault/project2",
      liveUrl: "https://project2.example.com",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Fond animé */}
      <ParticleCanvas />
      

      <main className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Titre animé */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary 
                     bg-clip-text text-transparent text-center mb-12"
        >
          Mes Projets
        </motion.h1>

        {/* Sous-titre animé */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-content/80 text-center mb-12"
        >
          A showcase of my latest work, blending creativity and technical expertise.
        </motion.p>

        {/* Liste des projets - Responsive avec Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
