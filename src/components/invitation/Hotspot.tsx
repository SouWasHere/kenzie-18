"use client";

interface HotspotProps {
  href: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
}

export default function Hotspot({ href, x, y, w, h, label }: HotspotProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="absolute border-2 border-red-600 bg-red-500/25"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${w}%`,
        height: `${h}%`,
      }}
    />
  );
}
