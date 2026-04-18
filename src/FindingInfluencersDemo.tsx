import { useEffect, useState } from "react";

const PLATFORMS = ["TikTok", "Instagram", "YouTube"] as const;
const DEMO_VIEW_URLS = [
  "https://www.tiktok.com/search?q=%40lenak",
  "https://www.tiktok.com/search?q=%40jaxtt",
];

function DemoAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-sky-100 text-[10px] font-bold tracking-tight text-black/50 ring-1 ring-black/10"
      aria-hidden
    >
      {initials}
    </div>
  );
}

const demoTableGrid =
  "sm:grid sm:grid-cols-[10rem_minmax(2.35rem,2.65rem)_minmax(0,1fr)_minmax(2.75rem,3.25rem)] sm:items-start sm:gap-x-3 sm:px-3";

const followersCell =
  "min-w-0 w-full justify-self-stretch whitespace-nowrap text-left tabular-nums tracking-normal";

/** Nudge Followers column (header + counts) left together */
const followersShift = "-ml-7";

export default function FindingInfluencersDemo() {
  const [phase, setPhase] = useState(0);
  const [activePlatform, setActivePlatform] = useState<(typeof PLATFORMS)[number]>("TikTok");

  useEffect(() => {
    let alive = true;
    const pending: ReturnType<typeof setTimeout>[] = [];

    const kick = () => {
      pending.forEach(clearTimeout);
      pending.length = 0;
      if (!alive) return;
      setPhase(0);
      const steps: [number, number][] = [
        [1, 500],
        [2, 2200],
        [3, 3600],
        [4, 4300],
        [5, 5000],
      ];
      steps.forEach(([next, ms]) => {
        pending.push(
          setTimeout(() => {
            if (alive) setPhase(next);
          }, ms),
        );
      });
    };

    kick();
    const loop = setInterval(kick, 14000);

    return () => {
      alive = false;
      pending.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <div
      className="mx-auto mt-4 w-full max-w-3xl rounded-[1.75rem] border border-black/10 bg-white/55 p-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:mt-6 sm:p-5 md:max-w-4xl"
      aria-label="How iFinder works"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-black/8 pb-3">
        <span className="text-[10px] font-bold tracking-wide text-black/40 sm:text-xs">How iFinder works</span>
        <div className="flex flex-wrap gap-1.5">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setActivePlatform(p)}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition sm:px-3 sm:text-xs ${
                p === activePlatform
                  ? "bg-black text-white"
                  : "bg-white/80 text-black/60 ring-1 ring-black/10 hover:bg-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`rounded-2xl border border-black/8 bg-[#faf9fb] p-3 transition-all duration-500 sm:p-4 ${
          phase >= 1 ? "opacity-100" : "opacity-40"
        }`}
      >
        <div className="mb-2 border-b border-black/6 pb-2">
          <div className="font-logo text-sm font-extrabold leading-none text-black [font-variant-ligatures:common-ligatures]">
            {"i\uFB01nder"}
          </div>
        </div>

        <div
          className={`space-y-3 transition-all duration-500 ${
            phase >= 1 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-white px-3 py-2.5 text-[11px] leading-relaxed text-black/85 shadow-sm ring-1 ring-black/6 sm:max-w-[85%] sm:text-xs">
            <span className="mb-1 block text-[9px] font-semibold uppercase tracking-wide text-black/40">You</span>
            We&apos;re launching a new AI note-taking tool and want to work with TikTok creators who can naturally show
            how they use it in their daily workflow.
          </div>

          {phase >= 2 && phase < 3 && (
            <div className="flex items-center gap-2 rounded-2xl rounded-tl-md bg-white/90 px-3 py-2.5 ring-1 ring-black/6">
              <span className="text-[10px] font-semibold text-black/50">iFinder</span>
              <span className="inline-flex gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/35 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/35 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/35 [animation-delay:300ms]" />
              </span>
            </div>
          )}

          {phase >= 3 && (
            <div className="transition-all duration-500">
              <p className="mb-2 text-[11px] leading-relaxed text-black/75 sm:text-xs">
                Here are the best-fit <span className="font-bold text-black">TikTok</span> creators based on your brief.
              </p>

              <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
                <div
                  className={`hidden border-b border-black/8 bg-black/[0.02] py-2 text-[9px] font-bold uppercase tracking-wide text-black/45 sm:py-2.5 sm:text-[10px] ${demoTableGrid}`}
                >
                  <span className="min-w-0 truncate pr-1">Influencer</span>
                  <span className={`${followersCell} ${followersShift} text-black/45`}>Followers</span>
                  <span className="min-w-0 w-full px-1 text-center">Niche & match</span>
                  <span className="min-w-0" />
                </div>

                <div
                  className={`grid grid-cols-1 gap-3 border-b border-black/6 py-3 transition-all duration-500 sm:py-2.5 ${demoTableGrid} ${
                    phase >= 4 ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="relative flex min-w-0 gap-2">
                    <div className="flex w-11 flex-col items-center gap-1">
                      <DemoAvatar initials="LK" />
                      <span
                        className="max-w-[2.75rem] truncate text-center text-[9px] font-medium text-black/45 select-none blur-[3px]"
                        aria-hidden="true"
                        title="Unlock to view full profile"
                      >
                        @lenak
                      </span>
                    </div>
                    <div className="min-w-0 self-center pt-0.5">
                      <div
                        className="text-xs font-bold leading-tight text-black select-none blur-[3px]"
                        aria-hidden="true"
                        title="Unlock to view full profile"
                      >
                        Lena Kim
                      </div>
                      <div className="mt-0.5 text-[10px] text-black/40">TikTok</div>
                    </div>
                    <span className="sr-only">Lena Kim, @lenak, TikTok</span>
                  </div>
                  <div className={`${followersCell} ${followersShift} text-[11px] font-semibold text-black/75 pt-0.5 sm:pt-2.5`}>12K</div>
                  <div className="min-w-0 text-[10px] leading-relaxed text-black/70 sm:pt-1">
                    <span className="font-semibold text-black/85">StudyTok · AI notes</span>
                    <span className="text-black/35"> — </span>
                    #StudyTok #Productivity · Prior sponsored AI writing tool · Comments ask capture/export flows · Desk
                    + screen-record routines map to a natural &ldquo;how I capture ideas in my day&rdquo; workflow demo.
                  </div>
                  <div className="shrink-0 justify-self-end pr-3 pt-1">
                    <a
                      href={DEMO_VIEW_URLS[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-black underline decoration-black/25 underline-offset-2 transition hover:decoration-black"
                    >
                      Link
                    </a>
                  </div>
                </div>

                <div
                  className={`grid grid-cols-1 gap-3 py-3 transition-all duration-500 sm:py-2.5 ${demoTableGrid} ${
                    phase >= 5 ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="relative flex min-w-0 gap-2">
                    <div className="flex w-11 flex-col items-center gap-1">
                      <DemoAvatar initials="JR" />
                      <span
                        className="max-w-[2.75rem] truncate text-center text-[9px] font-medium text-black/45 select-none blur-[3px]"
                        aria-hidden="true"
                        title="Unlock to view full profile"
                      >
                        @jaxtt
                      </span>
                    </div>
                    <div className="min-w-0 self-center pt-0.5">
                      <div
                        className="text-xs font-bold leading-tight text-black select-none blur-[3px]"
                        aria-hidden="true"
                        title="Unlock to view full profile"
                      >
                        Jax Ryu
                      </div>
                      <div className="mt-0.5 text-[10px] text-black/40">TikTok</div>
                    </div>
                    <span className="sr-only">Jax Ryu, @jaxtt, TikTok</span>
                  </div>
                  <div className={`${followersCell} ${followersShift} text-[11px] font-semibold text-black/75 pt-0.5 sm:pt-2.5`}>9K</div>
                  <div className="min-w-0 text-[10px] leading-relaxed text-black/70 sm:pt-1">
                    <span className="font-semibold text-black/85">Desk vlog · Quick tips</span>
                    <span className="text-black/35"> — </span>
                    #DeskTok #WFH · Earlier AI dictation / voice-notes tie-ins · Morning planning beats give a soft slot
                    for &ldquo;capture on the go&rdquo; without a hard sell—great for showing the tool inside a real day.
                  </div>
                  <div className="shrink-0 justify-self-end pr-3 pt-1">
                    <a
                      href={DEMO_VIEW_URLS[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-black underline decoration-black/25 underline-offset-2 transition hover:decoration-black"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
