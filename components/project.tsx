"use client";
import { useState } from "react";
import { ParticleCanvas } from "@/hooks/particle";
import { motion } from "framer-motion";
import ProjectCard from "@/components/projectCard";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NikoGuitarLesson",
      description:
        "NikoGuitarLesson est une plateforme moderne et intuitive développée en React.js pour le front-end et Node.js pour le back-end. Elle permet aux utilisateurs de réserver des cours de guitare en ligne en toute simplicité. Grâce à une interface utilisateur fluide et responsive, les élèves peuvent consulter les disponibilités des enseignants, s'inscrire à des sessions et gérer leurs réservations en quelques clics. Le back-end en Node.js assure une gestion sécurisée des utilisateurs et des transactions, garantissant une expérience fiable et performante. Ce projet met en avant l'intégration de technologies modernes, une approche full-stack optimisée et une architecture évolutive pour répondre aux besoins des musiciens et enseignants.",
      imageUrl: "/images_projet/nikoguitarlesson.jpg",
      videoUrl: "/videos/nikoguitarlesson.mp4",
      githubUrl: "None",
      liveUrl: "https://nikoguitarlesson.fr",
    },
    {
      title: "Portfolio - Maxence Rault",
      description:
        "Un portfolio moderne et interactif développé avec Next.js et TypeScript, mettant en avant mon parcours et mes réalisations. Ce site a été conçu pour offrir une navigation fluide et immersive grâce à des animations épurées avec Framer Motion et un design responsive optimisé. L'intégration de Tailwind CSS assure une mise en page élégante et adaptable à tous les écrans. Le portfolio comprend une section détaillée sur mes projets, un formulaire de contact fonctionnel et des interactions dynamiques pour améliorer l'expérience utilisateur. Ce projet reflète mon expertise en développement full-stack et mon attention aux détails en matière de design et d'ergonomie.",
      imageUrl: "/images_projet/portfolio.png",
      videoUrl: "/videos/portfolio.mp4",
      githubUrl: "https://github.com/MaxenceRault/Portfolio",
      liveUrl: "https://raultmaxence.fr", 
    },
    
    {
      title: "Pokemon Game",
      description:
        "Un jeu Pokémon développé en PHP avec une architecture orientée objet (POO). Il utilise MySQL pour la gestion des données et JavaScript pour les fonctionnalités en temps réel. Ce projet met en place un système de combat entre Pokémon avec des statistiques dynamiques, une gestion de l'inventaire, et une interface interactive permettant aux joueurs de sélectionner leurs actions en temps réel. Les données des combats et des Pokémon sont stockées et récupérées depuis une base de données MySQL, assurant la persistance et l'évolution des créatures. L'utilisation de JavaScript permet de gérer les interactions et mises à jour sans rechargement de page, rendant l'expérience fluide et immersive.",
      imageUrl: "/images_projet/pokemon.png",
      videoUrl: "/videos/pokemon_game.mp4",
      githubUrl: "https://github.com/MaxenceRault/Pokemon_game",
      liveUrl: "None",
    },

    
  ];

  // 🔥 Définition du nombre de colonnes
  const gridCols = `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`;

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center">
      {/* Fond animé */}
      <ParticleCanvas />

      <main className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
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
          Découvrez mes réalisations, alliant innovation et expertise technique.
        </motion.p>

        {/* ✅ Affichage des détails au-dessus en desktop */}
        <div className="hidden lg:block w-full">
          {selectedProject !== null && (
            <motion.div
              className="w-full max-w-5xl mx-auto mb-12 p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.video
                src={projects[selectedProject].videoUrl}
                controls
                className="w-full rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              <h2 className="text-3xl font-bold text-white text-center mt-6">
                {projects[selectedProject].title}
              </h2>
              <p className="text-gray-300 mt-4 text-center">
                {projects[selectedProject].description}
              </p>

              {/* ✅ Liens externes */}
              <div className="flex gap-4 mt-6 justify-center">
                <motion.a
                  href={
                    projects[selectedProject].githubUrl !== "None"
                      ? projects[selectedProject].githubUrl
                      : undefined
                  }
                  target={
                    projects[selectedProject].githubUrl !== "None"
                      ? "_blank"
                      : undefined
                  }
                  whileHover={
                    projects[selectedProject].githubUrl !== "None"
                      ? { scale: 1.1 }
                      : {}
                  }
                  className={`px-4 py-2 rounded-lg shadow-md transition ${
                    projects[selectedProject].githubUrl !== "None"
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-500 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  💻 Voir le code
                </motion.a>

                <motion.a
                  href={
                    projects[selectedProject].liveUrl !== "None"
                      ? projects[selectedProject].liveUrl
                      : undefined
                  }
                  target={
                    projects[selectedProject].liveUrl !== "None"
                      ? "_blank"
                      : undefined
                  }
                  whileHover={
                    projects[selectedProject].liveUrl !== "None"
                      ? { scale: 1.1 }
                      : {}
                  }
                  className={`px-4 py-2 rounded-lg shadow-md transition ${
                    projects[selectedProject].liveUrl !== "None"
                      ? "bg-green-500 text-white hover:bg-green-700"
                      : "bg-gray-500 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  🚀 Voir en ligne
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Liste des projets */}
        <div className={`grid ${gridCols} gap-6 w-full justify-center`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-center flex-col items-center"
            >
              <ProjectCard
                {...project}
                isSelected={selectedProject === index}
                onSelect={() =>
                  setSelectedProject(selectedProject === index ? null : index)
                }
              />

              {/* ✅ Affichage des détails sous la carte sélectionnée en mobile */}
              <div className="lg:hidden">
                {selectedProject === index && (
                  <motion.div
                    className="mt-4 p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-700 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.video
                      src={projects[selectedProject].videoUrl}
                      controls
                      className="w-full rounded-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />

                    <h2 className="text-xl font-bold text-white text-center mt-4">
                      {projects[selectedProject].title}
                    </h2>
                    <p className="text-gray-300 mt-2 text-center">
                      {projects[selectedProject].description}
                    </p>

                    {/* ✅ Liens externes */}
                    <div className="flex gap-4 mt-4 justify-center">
                      <motion.a
                        href={
                          projects[selectedProject].githubUrl !== "None"
                            ? projects[selectedProject].githubUrl
                            : undefined
                        }
                        target={
                          projects[selectedProject].githubUrl !== "None"
                            ? "_blank"
                            : undefined
                        }
                        whileHover={
                          projects[selectedProject].githubUrl !== "None"
                            ? { scale: 1.1 }
                            : {}
                        }
                        className={`px-4 py-2 rounded-lg shadow-md transition ${
                          projects[selectedProject].githubUrl !== "None"
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                      >
                        💻 Voir le code
                      </motion.a>

                      <motion.a
                        href={
                          projects[selectedProject].liveUrl !== "None"
                            ? projects[selectedProject].liveUrl
                            : undefined
                        }
                        target={
                          projects[selectedProject].liveUrl !== "None"
                            ? "_blank"
                            : undefined
                        }
                        whileHover={
                          projects[selectedProject].liveUrl !== "None"
                            ? { scale: 1.1 }
                            : {}
                        }
                        className={`px-4 py-2 rounded-lg shadow-md transition ${
                          projects[selectedProject].liveUrl !== "None"
                            ? "bg-green-500 text-white hover:bg-green-700"
                            : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                      >
                        🚀 Voir en ligne
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
