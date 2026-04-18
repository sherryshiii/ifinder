import type { ReactElement } from "react";

const itemClass =
  "flex shrink-0 items-center gap-3 text-[#111111] opacity-[0.9] transition-opacity hover:opacity-100";

function MarkBars() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 22V10h4v12H6zm8 16V6h4v26h-4zm8-8V14h4v16h-4z" fill="currentColor" />
    </svg>
  );
}

function MarkShield() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 4L6 8.5v7.4c0 5.4 4.2 10.4 10 11.9 5.8-1.5 10-6.5 10-11.9V8.5L16 4z"
        fill="currentColor"
        opacity="0.92"
      />
      <path d="M16 11v10M12 16h8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MarkParallel() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 6h3v20H8V6zm6.5 0h3v20h-3V6zm6.5 0h3v20h-3V6z" fill="currentColor" />
    </svg>
  );
}

function MarkBloom() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="3.2" fill="currentColor" />
      <circle cx="16" cy="9" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="16" cy="23" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="9.5" cy="12.5" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="22.5" cy="12.5" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="9.5" cy="19.5" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="22.5" cy="19.5" r="2.4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function MarkChevron() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 24L20 8l4 4-12 16H8v-4z" fill="currentColor" />
    </svg>
  );
}

function MarkNorth() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M10 26L22 6v14l-6 6h-6z" fill="currentColor" />
    </svg>
  );
}

function MarkHex() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 4l10 5.75v12.5L16 28 6 22.25V9.75L16 4zm0 3.35L9.2 11.4v9.2L16 24.65 22.8 20.6v-9.2L16 7.35z"
        fill="currentColor"
      />
      <circle cx="16" cy="16" r="2.2" fill="white" opacity="0.95" />
    </svg>
  );
}

function MarkStack() {
  return (
    <svg className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 8h20v3H6V8zm0 6.5h16v3H6v-3zm0 6.5h12v3H6v-3z" fill="currentColor" />
    </svg>
  );
}

const BRANDS: { name: string; Mark: () => ReactElement }[] = [
  { name: "Lumen", Mark: MarkBars },
  { name: "Vault", Mark: MarkShield },
  { name: "Parallel", Mark: MarkParallel },
  { name: "Bloom", Mark: MarkBloom },
  { name: "Stride", Mark: MarkChevron },
  { name: "Northline", Mark: MarkNorth },
  { name: "Cipher", Mark: MarkHex },
  { name: "Stackhouse", Mark: MarkStack },
];

/** Second row: reversed order so marks do not line up with row 1. */
const BRANDS_ROW2 = [...BRANDS].reverse();

type Brand = (typeof BRANDS)[number];

function LogoStrip({ brands, rowKey }: { brands: Brand[]; rowKey: string }) {
  return (
    <div className="flex shrink-0 items-center gap-x-10 gap-y-6 px-8 sm:gap-x-14 sm:px-12 md:gap-x-20 md:px-16">
      {brands.map(({ name, Mark }) => (
        <div key={`${rowKey}-${name}`} className={itemClass}>
          <Mark />
          <span className="font-sans text-lg font-black uppercase tracking-[0.12em] sm:text-xl">{name}</span>
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({
  brands,
  rowKey,
  reverse,
}: {
  brands: Brand[];
  rowKey: string;
  reverse?: boolean;
}) {
  const trackClass = reverse ? "logo-marquee-track-reverse flex w-max" : "logo-marquee-track flex w-max";

  return (
    <div className="relative overflow-hidden py-1.5 md:py-2">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white via-white/85 to-transparent sm:w-20 md:w-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white via-white/85 to-transparent sm:w-20 md:w-28"
        aria-hidden
      />

      <div className={trackClass}>
        <LogoStrip brands={brands} rowKey={`${rowKey}-a`} />
        <LogoStrip brands={brands} rowKey={`${rowKey}-b`} />
      </div>
    </div>
  );
}

export default function ClientLogosMarquee() {
  return (
    <section
      className="px-4 pb-10 pt-1 md:px-8 md:pb-14 md:pt-2"
      aria-label="Illustrative partner brands"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white px-5 py-5 shadow-[0_10px_0_rgba(0,0,0,0.04)] ring-1 ring-black/6 md:px-7 md:py-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <MarqueeRow brands={BRANDS} rowKey="r1" />
            <MarqueeRow brands={BRANDS_ROW2} rowKey="r2" reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
