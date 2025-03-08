"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HardSkill({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div className="relative flex flex-col items-center">
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
      <motion.span
        className="mt-3 text-sm text-white bg-none px-3 py-1 rounded-md shadow-md"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
