"use client";

interface Props {
  href: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

export default function Hotspot({ href, top, left, width, height }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-10 rounded-md border border-red-500/40 bg-red-500/10"
      style={{ top, left, width, height }}
    />
  );
}
