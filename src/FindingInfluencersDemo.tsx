import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const PLATFORMS = ["TikTok", "Instagram", "YouTube"] as const;
type Platform = (typeof PLATFORMS)[number];

export type ListPhase = "idle" | "loading" | "ready";

function promptForPlatform(p: Platform): string {
  const noun =
    p === "TikTok" ? "TikTok creators" : p === "Instagram" ? "Instagram creators" : "YouTube creators";
  return `We're launching a new AI note-taking tool and want to work with ${noun} who can naturally show how they use it in their daily workflow.`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/** Lifestyle-creator hashtags shown on demo cards (first row). */
const LIFESTYLE_HASHTAGS = ["#OOTD", "#Vlog", "#GRWM", "#DayInMyLife"] as const;

const signalPillClass =
  "inline-flex w-full min-w-0 max-w-full items-center justify-center rounded-full border border-black/10 bg-white px-1.5 py-0.5 text-center text-[9px] font-medium leading-tight text-black sm:px-2 sm:text-[10px]";

const hashtagPillClass =
  "inline-flex w-fit max-w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-black/15 bg-white/95 px-2 py-0.5 text-[9px] font-semibold leading-tight tracking-tight text-black/85 sm:px-2.5 sm:text-[10px]";

type InfluencerRow = {
  initials: string;
  name: string;
  handle: string;
  followers: string;
  tags: readonly string[];
};

const INFLUENCERS: readonly InfluencerRow[] = [
  {
    initials: "S",
    name: "Samantha H.",
    handle: "@samunhinged1",
    followers: "18K",
    tags: [
      "Replies to buyers",
      "Commission-friendly",
      "Strong product demos",
      "StudyTok overlap",
      "High save rate",
      "DM responsive",
    ],
  },
  {
    initials: "H",
    name: "Hannah R.",
    handle: "@hannaricketts",
    followers: "10K",
    tags: [
      "Natural placement",
      "Vlog integration",
      "High trust content",
      "Long-form depth",
      "Audience 25–34",
      "Sponsored fit",
    ],
  },
  {
    initials: "M",
    name: "Micro Influencer",
    handle: "@desksetupdaily",
    followers: "7K",
    tags: [
      "Use-case led",
      "Purchase cues",
      "Niche audience fit",
      "Carousel posts",
      "Story replies",
      "Geo-local",
    ],
  },
] as const;

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

const inputTextBaseClass =
  "min-h-[3.25rem] w-full px-2 py-1 text-[11px] leading-snug sm:min-h-[3.5rem] sm:py-1.5 sm:text-xs md:text-sm";

function InfluencerCardInterior({ item }: { item: InfluencerRow }) {
  const signalRow1 = item.tags.slice(0, 3);
  const signalRow2 = item.tags.slice(3, 6);

  return (
    <div className="flex gap-2 sm:gap-3">
      <div className="flex w-[3.75rem] shrink-0 flex-col items-center gap-0.5 text-center sm:w-16">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-black text-white"
          aria-hidden
        >
          {item.initials}
        </div>
        <div className="w-full truncate text-[11px] font-bold leading-tight text-black">{item.name}</div>
        <div className="w-full truncate text-[9px] font-medium leading-tight text-black/50">{item.handle}</div>
        <span className="mt-0.5 inline-flex w-fit shrink-0 rounded-full border border-black/[0.1] bg-white px-1 py-0.5 text-[11px] font-semibold tabular-nums leading-none text-black">
          {item.followers}
        </span>
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="mt-0.5 min-w-0">
          {/* Hashtag row + Profile (top-right) */}
          <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-3">
            <div className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-x-2 gap-y-1 sm:gap-x-2.5">
              {LIFESTYLE_HASHTAGS.map((h) => (
                <span key={h} className={hashtagPillClass} title={h}>
                  {h}
                </span>
              ))}
            </div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="shrink-0 pt-0.5 text-[10px] font-semibold text-black underline decoration-dashed decoration-black/35 underline-offset-[3px] transition hover:decoration-black/55 sm:text-[11px] sm:pr-0.5"
              title="Profile link — coming soon"
            >
              Profile
            </a>
          </div>
          {/* Signal part: separated so it reads as a second block */}
          <div className="mt-3.5 flex flex-col gap-1.5 border-t border-black/[0.09] pt-3.5 sm:mt-4 sm:pt-4">
            <div className="grid grid-cols-3 gap-x-1.5 gap-y-0">
              {signalRow1.map((tag) => (
                <div key={tag} className="min-w-0">
                  <span className={signalPillClass} title={tag}>
                    <span className="truncate">{tag}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-x-1.5 gap-y-0">
              {signalRow2.map((tag) => (
                <div key={tag} className="min-w-0">
                  <span className={signalPillClass} title={tag}>
                    <span className="truncate">{tag}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfluencerCard({ item }: { item: InfluencerRow }) {
  return (
    <div className="rounded-[1.35rem] border border-black/[0.08] bg-[#f9f7f6] p-3 shadow-sm ring-1 ring-black/[0.04] sm:rounded-[1.5rem] sm:p-3.5">
      <InfluencerCardInterior item={item} />
    </div>
  );
}

function BlurredInfluencerCardWithCtas({
  item,
  children,
}: {
  item: InfluencerRow;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-black/[0.08] bg-[#f9f7f6] shadow-sm ring-1 ring-black/[0.04] sm:rounded-[1.5rem]">
      <div className="pointer-events-none select-none p-3 blur-[7px] sm:p-3.5 sm:blur-[8px]">
        <InfluencerCardInterior item={item} />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2 sm:p-3">
        <div className="pointer-events-auto flex w-full max-w-md flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FindingInfluencersDemo() {
  const [activePlatform, setActivePlatform] = useState<Platform>("TikTok");
  const [prompt, setPrompt] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [listPhase, setListPhase] = useState<ListPhase>("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const userEditedRef = useRef(false);
  const platformRef = useRef(activePlatform);
  platformRef.current = activePlatform;

  const listOpenRef = useRef(false);
  listOpenRef.current = listPhase !== "idle";

  const exampleForPlatform = promptForPlatform(activePlatform);
  const usingExampleText = typingComplete && prompt === exampleForPlatform;
  const textareaColorClass = usingExampleText ? "text-black/55" : "text-black";

  useEffect(() => {
    let cancelled = false;

    const runOnce = async () => {
      setTypingComplete(false);
      setPrompt("");
      await sleep(220);

      const fullText = promptForPlatform(platformRef.current);

      for (let i = 0; i <= fullText.length; i++) {
        if (cancelled) return;
        if (listOpenRef.current) return;
        if (userEditedRef.current) {
          setTypingComplete(true);
          return;
        }
        setPrompt(fullText.slice(0, i));
        if (i < fullText.length) {
          await sleep(i < 3 ? 48 : 32);
        }
      }

      if (cancelled || listOpenRef.current) return;
      if (userEditedRef.current) {
        setTypingComplete(true);
        return;
      }
      setTypingComplete(true);
    };

    void runOnce();

    return () => {
      cancelled = true;
    };
  }, [activePlatform]);

  useEffect(() => {
    if (listPhase !== "loading") return;
    const done = window.setTimeout(() => {
      setListPhase("ready");
    }, 2000);
    return () => window.clearTimeout(done);
  }, [listPhase]);

  useEffect(() => {
    if (!typingComplete || listPhase !== "idle") return;
    const el = textareaRef.current;
    if (!el) return;
    el.focus();
    const len = el.value.length;
    el.setSelectionRange(len, len);
  }, [typingComplete, listPhase]);

  const handleSend = useCallback(() => {
    if (listPhase !== "idle" || !typingComplete || !prompt.trim()) return;
    setListPhase("loading");
  }, [listPhase, prompt, typingComplete]);

  const closeList = useCallback(() => {
    setListPhase("idle");
  }, []);

  useEffect(() => {
    if (listPhase === "idle") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeList();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [listPhase, closeList]);

  const threeCards = INFLUENCERS.slice(0, 3);

  return (
    <div
      className="mx-auto mt-2 w-full max-w-[min(100%,34rem)] rounded-[1.75rem] border border-black/10 bg-white/55 p-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:mt-3 sm:max-w-[min(100%,38rem)] sm:p-5 lg:max-w-[min(100%,42rem)]"
      aria-label="How iFinder works"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-black/8 pb-3">
        <div className="font-logo text-lg font-extrabold leading-none text-black [font-variant-ligatures:common-ligatures] md:text-xl">
          {"i\uFB01nder"}
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                userEditedRef.current = false;
                setListPhase("idle");
                setActivePlatform(p);
              }}
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium transition sm:px-3 sm:text-xs ${
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

      <div className="rounded-2xl border border-black/8 bg-[#faf9fb] p-2.5 sm:p-3">
        <label htmlFor="ifinder-demo-prompt" className="sr-only">
          Describe your campaign or brief
        </label>
        <div className="relative flex flex-nowrap items-end gap-2 rounded-xl border border-black/10 bg-white px-2 py-1.5 shadow-sm ring-1 ring-black/5 sm:gap-2.5 sm:px-2.5 sm:py-2">
          <div className="min-w-0 flex-1">
            {typingComplete ? (
              <textarea
                id="ifinder-demo-prompt"
                ref={textareaRef}
                value={prompt}
                onChange={(e) => {
                  userEditedRef.current = true;
                  setPrompt(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                rows={2}
                className={`${inputTextBaseClass} ${textareaColorClass} resize-none bg-transparent caret-black outline-none selection:bg-black/10`}
              />
            ) : (
              <div
                id="ifinder-demo-prompt"
                className={`${inputTextBaseClass} whitespace-pre-wrap break-words text-black/55`}
                aria-busy="true"
              >
                {prompt}
                <span className="demo-typewriter-caret" aria-hidden />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleSend}
            disabled={listPhase !== "idle" || !typingComplete || !prompt.trim()}
            className="mr-[3px] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white opacity-100 shadow-sm transition hover:bg-neutral-900 disabled:cursor-not-allowed disabled:bg-black disabled:text-white disabled:opacity-100 disabled:pointer-events-none sm:h-8 sm:w-8"
            aria-label="Send brief and view matches"
          >
            <SendIcon className="block h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" />
          </button>
        </div>

        {listPhase !== "idle" && (
          <div className="mt-2 border-t border-black/[0.07] pt-2.5 sm:mt-2.5 sm:pt-2.5">
            {listPhase === "loading" && (
              <div className="flex justify-center px-0.5 sm:px-1">
                <div
                  role="status"
                  aria-live="polite"
                  className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-md border border-neutral-300/90 bg-white px-2.5 py-1.5 shadow-sm sm:gap-2 sm:rounded-lg sm:px-3 sm:py-1.5"
                >
                  <span className="text-[11px] font-normal tracking-tight text-black/45 sm:text-xs">
                    iFinder
                  </span>
                  <span className="inline-flex items-center gap-[3px] pl-0.5" aria-hidden>
                    <span className="ifinder-loading-dot" />
                    <span className="ifinder-loading-dot" />
                    <span className="ifinder-loading-dot" />
                  </span>
                </div>
              </div>
            )}

            {listPhase === "ready" && (
              <div className="space-y-2 sm:space-y-2.5">
                <InfluencerCard item={threeCards[0]} />
                <InfluencerCard item={threeCards[1]} />
                <BlurredInfluencerCardWithCtas item={threeCards[2]}>
                  <button
                    type="button"
                    className="w-full rounded-full bg-black px-3 py-2 text-center text-[11px] font-semibold text-white transition hover:bg-neutral-900 sm:w-auto sm:px-4 sm:text-xs"
                    title="Coming soon"
                  >
                    Start finding influencers
                  </button>
                  <a
                    href="#problem"
                    className="block w-full rounded-full bg-white px-3 py-2 text-center text-[11px] font-semibold text-black ring-1 ring-black/10 transition hover:bg-neutral-50 sm:w-auto sm:px-4 sm:text-xs"
                  >
                    See how we evaluate fit
                  </a>
                </BlurredInfluencerCardWithCtas>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
