"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#8395A7]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/paper-texture.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl"
        >
          <Image
            src="/images/page1/hero.png"
            alt="Hero"
            width={1600}
            height={1000}
            priority
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="-mt-16 w-[320px] md:w-[420px]"
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
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="-mt-10 w-full max-w-5xl"
        >
          <Image
            src="/images/page1/invitation.png"
            alt=""
            width={1800}
            height={1200}
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
