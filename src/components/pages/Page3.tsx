"use client";

import Image from "next/image";
import Hotspot from "@/components/invitation/Hotspot";
import { HOTSPOTS } from "@/config/hotspots";
import { SITE } from "@/config/site";

export default function Page3() {
  const rsvp = HOTSPOTS.page3.rsvp;

  return (
    <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[600px]">
      <Image
        src="/pages/3.svg"
        alt="Page 3"
        width={1080}
        height={1920}
        className="block w-full h-auto"
      />

      <Hotspot
        href={SITE.rsvp}
        x={rsvp.x}
        y={rsvp.y}
        w={rsvp.w}
        h={rsvp.h}
        label="RSVP"
      />
    </div>
  );
}
