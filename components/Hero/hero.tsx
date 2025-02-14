"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroText from "./heroText";
import HeroImage from "./heroImage";
import HeroBackground from "./heroBackground";
import HeroEducation from "./heroEducation";
import HeroSkills from "./heroSkills";
import HeroContact from "./heroContact";
import AnimatedDivider from "@/components/animatedDivider";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Fond animé */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Texte à gauche */}
          <HeroText />

          {/* Image animée */}
          <motion.div className="lg:w-1/2 relative" style={{ y }}>
            <HeroImage />
          </motion.div>
        </div>
        
        <AnimatedDivider text="🚀 Mon Parcours" />

        {/* Formation suivie */}
        <div className="mt-40">
          <HeroEducation />
        </div>

        <AnimatedDivider text="💡 Mes Compétences" />

        {/* Skills */}
        <HeroSkills />

        <AnimatedDivider text="✉️ Me Contacter" />

        {/* Contact Form */}  
        <HeroContact />
      </div>
    </section>
  );
}
