"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#8A9AAC]">
      <div className="absolute inset-0 bg-[url('/images/paper.jpg')] opacity-10" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-5xl"
        >
          <Image
            src="/images/page1/hero.png"
            alt="Kenzie"
            width={1800}
            height={1400}
            priority
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          className="-mt-20 w-80 md:w-[430px]"
        >
          <Image
            src="/images/page1/ornament.png"
            alt=""
            width={800}
            height={800}
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="-mt-8 w-full max-w-5xl"
        >
          <Image
            src="/images/page1/invitation.png"
            alt=""
            width={1800}
            height={1600}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
