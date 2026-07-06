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
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute z-20 rounded-md transition ${
        debug
          ? "border-2 border-red-600 bg-red-500/30"
          : ""
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