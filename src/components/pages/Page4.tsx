"use client";

import Image from "next/image";
import Hotspot from "@/components/invitation/Hotspot";
import { HOTSPOTS } from "@/config/hotspots";
import { SITE } from "@/config/site";

export default function Page4() {
  const hotspots = HOTSPOTS.page4;

  return (
    <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[600px]">
      <Image
        src="/pages/4.svg"
        alt="Page 4"
        width={1080}
        height={1920}
        className="block h-auto w-full"
      />

      <Hotspot href={SITE.links.traditions} x={hotspots.traditions.x} y={hotspots.traditions.y} w={hotspots.traditions.w} h={hotspots.traditions.h} />
      <Hotspot href={SITE.links.surprise} x={hotspots.surprise.x} y={hotspots.surprise.y} w={hotspots.surprise.w} h={hotspots.surprise.h}  />
      
    </div>
  );
}
