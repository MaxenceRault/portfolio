"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HardSkill({ name, icon }: { name: string; icon: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-20 h-20 p-3 rounded-xl bg-gray-800 flex items-center justify-center cursor-pointer border border-transparent"
        whileHover={{
          scale: 1.2,
          borderColor: "rgba(0, 150, 255, 0.8)",
          boxShadow: "0px 0px 10px rgba(0, 150, 255, 0.8)",
        }}
        transition={{ duration: 0.3 }}
      >
        <Image src={icon} alt={name} width={50} height={50} />
      </motion.div>

      {isHovered && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-3 text-sm text-white bg-black px-3 py-1 rounded-md shadow-md"
        >
          {name}
        </motion.span>
      )}
    </motion.div>
  );
}
