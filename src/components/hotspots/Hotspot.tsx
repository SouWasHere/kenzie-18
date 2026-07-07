"use client";

interface Props {
  href: string;
  x: number;
  y: number;
  w: number;
  h: number;
  debug?: boolean;
}

export default function Hotspot({
  href,
  x,
  y,
  w,
  h,
  debug = false,
}: Props) {
  return (
    <a
      href={href}
      target={href.startsWith("/") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`absolute z-50 rounded-md transition-all ${
        debug
          ? "border-2 border-red-500 bg-red-500/30 hover:bg-red-500/50"
          : "border-2 border-transparent bg-transparent"
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${w}%`,
        height: `${h}%`,
      }}
    />
  );
}
