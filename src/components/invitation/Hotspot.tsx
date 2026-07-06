"use client";

interface HotspotProps {
  href?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
  debug?: boolean;
}

export default function Hotspot({
  href,
  x,
  y,
  w,
  h,
  label = "Hotspot",
  debug = false,
}: HotspotProps) {
  const box = (
    <div
      aria-label={label}
      className={`absolute rounded-md transition-colors duration-200 ${debug ? "border-2 border-red-600 bg-red-500/30" : "border border-transparent bg-transparent"}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${w}%`,
        height: `${h}%`,
      }}
    />
  );

  if (!href) return box;

  const isExternal = href.startsWith("http");

  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
      {box}
    </a>
  );
}
