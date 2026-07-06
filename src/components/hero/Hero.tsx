"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hotspot from "@/components/ui/Hotspot";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#8C9BAA] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/textures/paper.jpg')",
          backgroundSize: "cover",
        }}
      />

      <div className="flex justify-center py-16">
        <div className="relative w-[95vw] max-w-[1100px] aspect-[3/4]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/page1/hero.png"
              alt=""
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute left-1/2 top-[47%] -translate-x-1/2 w-[42%] z-20"
          >
            <Image
              src="/images/page1/ornament.png"
              alt=""
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute left-1/2 top-[58%] -translate-x-1/2 w-[95%]"
          >
            <Image
              src="/images/page1/invitation.png"
              alt=""
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>

          <Hotspot
            top="83%"
            left="56%"
            width="26%"
            height="5%"
            onClick={() => alert("RSVP link coming soon!")}
          />
        </div>
      </div>
    </section>
  );
}
