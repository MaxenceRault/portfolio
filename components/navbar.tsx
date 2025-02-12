"use client";
import { motion } from "framer-motion";
import MenuItem from "./menu-items";

const navItems = [
    {name: "Projects", href:'#work'},
    {name: "Skills" , href:'#skills'},
    {name: "Contact" , href:'#contact'},
]
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl
      transition-all duration-300 ease-out"
    >
      <div className="max-w-7x1 mx-auto px-6 py-3">
        <div className="flex items-center justify-between ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]"></div>
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                <span className="font bold bg-gradient-to-r from-primary to-tertiary text-transparent bg-clip-text">
                  MR
                </span>
              </div>
            </div>
            <span className="font semi-bold text-content/90 group-hover:text-primary transition-colors">
              Maxence Rault
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 bg-background/80 px-4 py-2
            rounded-full border border-white/5 shadow-lg shadow-primary/5">
                {
                    navItems.map((items,i )=>(
                        <MenuItem key={items.name} index={i} href={items.href}>{items.name}</MenuItem>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
