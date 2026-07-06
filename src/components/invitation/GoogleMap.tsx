"use client";

interface GoogleMapProps {
  embedUrl: string;
  className?: string;
}

export default function GoogleMap({ embedUrl, className = "" }: GoogleMapProps) {
  return (
    <div className={`absolute overflow-hidden rounded-[1.1rem] border border-[#d8c5a6] bg-[#fdf8ef] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${className}`}>
      <div className="overflow-hidden rounded-[0.9rem] border border-[#e7d8b7] bg-white p-1">
        <iframe
          title="Venue map"
          src={embedUrl}
          className="h-full w-full rounded-[0.75rem] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
