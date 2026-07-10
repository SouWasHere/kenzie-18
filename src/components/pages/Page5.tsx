"use client";

import Image from "next/image";
import Hotspot from "@/components/invitation/Hotspot";
import { HOTSPOTS } from "@/config/hotspots";
import { SITE } from "@/config/site";

export default function Page5() {
  const hotspots = HOTSPOTS.page5;

  return (
    <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[600px]">
      <Image
        src="/pages/5.svg"
        alt="Page 5"
        width={1080}
        height={1920}
        className="block h-auto w-full"
      />

      <Hotspot href={SITE.links.altoids} x={hotspots.altoids.x} y={hotspots.altoids.y} w={hotspots.altoids.w} h={hotspots.altoids.h}  />
      <Hotspot href={SITE.links.upload} x={hotspots.upload.x} y={hotspots.upload.y} w={hotspots.upload.w} h={hotspots.upload.h}  />
      <Hotspot href={SITE.links.cd} x={hotspots.cd.x} y={hotspots.cd.y} w={hotspots.cd.w} h={hotspots.cd.h} />
    </div>
  );
}
