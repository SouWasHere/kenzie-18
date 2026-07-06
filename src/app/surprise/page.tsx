"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SurprisePage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-12 text-[#4b3b2a]">
      {!showPage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-[2rem] border border-[#d8c5a6] bg-white/80 px-8 py-16 text-center shadow-lg backdrop-blur"
        >
          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: [-2, 2, -1, 0], y: [0, -4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
            className="mb-6 rounded-2xl border border-[#d8c5a6] bg-[#f9efe2] px-8 py-6 text-2xl font-semibold shadow-sm"
          >
            A Little Surprise...
          </motion.div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f53]">
            Keep going
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-[#d8c5a6] bg-white/80 p-8 shadow-lg backdrop-blur"
        >
          <Image
            src="/pages/6.svg"
            alt="Surprise page"
            width={1080}
            height={1920}
            className="w-full max-w-[480px] rounded-2xl shadow-md"
          />

          <Link
            href="/"
            className="rounded-full bg-[#8b5e3c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#73472f]"
          >
            ← Back to Invitation
          </Link>
        </motion.div>
      )}
    </main>
  );
}
