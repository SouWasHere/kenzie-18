"use client";

import { motion } from "framer-motion";

export default function Floating({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
