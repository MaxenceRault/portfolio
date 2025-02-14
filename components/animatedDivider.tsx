"use client";
import { motion } from "framer-motion";

export default function AnimatedDivider({ text }: { text: string }) {
  return (
    <>
      <br />
      <br />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center items-center py-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text drop-shadow-lg">
          {text}
        </h2>
      </motion.div>
    </>
  );
}
