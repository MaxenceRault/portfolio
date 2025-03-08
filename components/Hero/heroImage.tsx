"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full aspect-square group">
      {/* Animated Border */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-secondary/30 to-tertiary/30 opacity-50"
      />

      {/* Floating Animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-sm"
      >
        <Image
          src="/portfolio.jpg"
          alt="Avatar"
          fill
          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Text de lcalisation ( optionnel )
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
          }}
          className="absolute bottom-8 left-8"
        >
          <div className="text-2xl font-bold text-content">
            Situé à
            <motion.span
              className="block bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Montesson, France
            </motion.span>
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  );
}
