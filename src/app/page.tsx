"use client";

import { useState } from "react";
import Envelope from "@/components/sections/Envelope";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <Envelope onOpen={() => setOpened(true)} />}

      <main className="min-h-screen bg-[#F8F2EB]">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-serif text-[#6E7E97]">
              Kenzie Turns 18
            </h1>

            <p className="text-neutral-500">Interactive Invitation</p>
          </div>
        </section>
      </main>
    </>
  );
}
