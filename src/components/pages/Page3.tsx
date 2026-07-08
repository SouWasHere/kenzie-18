"use client";

import Image from "next/image";
import Hotspot from "@/components/invitation/Hotspot";
import { HOTSPOTS } from "@/config/hotspots";
import { SITE } from "@/config/site";

export default function Page3() {
  const hotspots = HOTSPOTS.page3;

  return (
    <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[600px]">
      <Image
        src="/pages/3.svg"
        alt="Page 3"
        width={1080}
        height={1920}
        className="block h-auto w-full"
      />

      <Hotspot href={SITE.links.rsvp} x={hotspots.rsvp.x} y={hotspots.rsvp.y} w={hotspots.rsvp.w} h={hotspots.rsvp.h}  />
      <Hotspot href={SITE.links.dressCode} x={hotspots.dressCode.x} y={hotspots.dressCode.y} w={hotspots.dressCode.w} h={hotspots.dressCode.h}  />
    </div>
  );
}
