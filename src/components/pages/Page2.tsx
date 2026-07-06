"use client";

import Image from "next/image";

export default function Page2() {
  return (
    <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[600px]">
      <Image
        src="/pages/2.svg"
        alt="Page 2"
        width={1080}
        height={1920}
        className="block h-auto w-full"
      />

      <iframe
        title="Venue map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4321.853023843067!2d120.9366249!3d14.426679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3005c16b893%3A0x6937da615345f352!2sAll%20Seasons%20Events%20Place!5e1!3m2!1sen!2sph!4v1783362964555!5m2!1sen!2sph"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute left-[12%] top-[64%] h-[19%] w-[67%] rounded-[1.1rem] border border-[#d8c5a6] bg-[#fdf8ef] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      />
    </div>
  );
}
