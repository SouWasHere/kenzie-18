"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!opening ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F2EB]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpen}
            className="paper flex flex-col items-center gap-4 px-12 py-10"
          >
            <Mail size={70} className="text-[#6E7E97]" />

            <h2 className="text-3xl font-serif">An Invitation</h2>

            <p className="text-neutral-500">Tap to Open</p>
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-50 bg-[#F8F2EB]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
        />
      )}
    </AnimatePresence>
  );
}
