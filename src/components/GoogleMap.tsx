"use client";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#d8c5a6] bg-[#fdf8ef] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="overflow-hidden rounded-[1rem] border border-[#e7d8b7] bg-white p-2">
        <iframe
          title="Venue map"
          src="https://www.google.com/maps?q=Seattle&output=embed"
          className="h-[240px] w-full rounded-[0.8rem] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
