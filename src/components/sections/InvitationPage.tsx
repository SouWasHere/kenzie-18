"use client";

import { motion } from "framer-motion";
import Page1 from "@/components/pages/Page1";
import Page2 from "@/components/pages/Page2";
import Page3 from "@/components/pages/Page3";
import Page4 from "@/components/pages/Page4";
import Page5 from "@/components/pages/Page5";

const pages = [Page1, Page2, Page3, Page4, Page5];

export default function InvitationPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: "url('/backgrounds/bg.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "700px auto",
      }}
    >
      <div className="flex flex-col items-center">
        {pages.map((PageComponent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="w-full"
          >
            <div className="mx-auto flex w-full max-w-[430px] justify-center md:max-w-[520px] lg:max-w-[600px]">
              <PageComponent />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
