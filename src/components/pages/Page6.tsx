"use client";

import Image from "next/image";

export default function Page6() {
  return (
    <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[600px]">
      <Image
        src="/pages/6.svg"
        alt="Page 6"
        width={1080}
        height={1920}
        className="block w-full h-auto"
      />
    </div>
  );
}
