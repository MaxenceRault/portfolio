"use client";
import { ParticleCanvas } from "@/hooks/particle";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero/hero";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gray-900 relative"
    >
      <ParticleCanvas />
      <Navbar />
      <Hero />
      
    </motion.div>
  );
}
