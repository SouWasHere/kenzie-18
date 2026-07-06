"use client";

import { motion } from "framer-motion";

interface HotspotProps {
  top: string;
  left: string;
  width: string;
  height: string;
  onClick?: () => void;
  href?: string;
}

export default function Hotspot({
  top,
  left,
  width,
  height,
  onClick,
  href,
}: HotspotProps) {
  const content = (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px rgba(255,255,255,.35)",
      }}
      whileTap={{ scale: 0.98 }}
      className="absolute rounded-lg bg-red-500/20 border border-red-500 cursor-pointer"
      style={{
        top,
        left,
        width,
        height,
      }}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute"
        style={{ top, left, width, height }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="absolute"
      style={{ top, left, width, height }}
    >
      {content}
    </button>
  );
}
