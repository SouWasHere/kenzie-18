"use client";

import { useEffect, useRef, useState } from "react";

export default function useContainerSize() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      setSize({
        width: ref.current?.clientWidth ?? 0,
        height: ref.current?.clientHeight ?? 0,
      });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, size };
}
