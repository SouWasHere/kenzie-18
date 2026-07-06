import Image from "next/image";
import Link from "next/link";

export default function GiftGuidePage() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-12 text-[#4b3b2a]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-[#d8c5a6] bg-white/80 p-8 shadow-lg backdrop-blur">
        <Image
          src="/pages/6.svg"
          alt="Gift guide page"
          width={1080}
          height={1920}
          className="w-full max-w-[480px] rounded-2xl shadow-md"
        />

        <Link
          href="/"
          className="rounded-full bg-[#8b5e3c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#73472f]"
        >
          ← Back to Invitation
        </Link>
      </div>
    </main>
  );
}
