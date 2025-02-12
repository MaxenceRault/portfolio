import { motion } from "framer-motion";
import React from "react";

const MenuItem = ({children, index, href}:
    {children: React.ReactNode; index: number; href: string;}
    )=>{
    return(
        <motion.a
        className="realtive overflow-hidden px-2 py-1"
        initial={{opacity: 0 , y: -20}}
        animate={{opacity: 1, y: 0}}
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        >
            <span className="text-content/80 hover:text-primary transition">{children}</span>

        </motion.a>
    )
}

export default MenuItem;