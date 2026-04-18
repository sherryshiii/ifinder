import ClientLogosMarquee from "./ClientLogosMarquee";
import FindingInfluencersDemo from "./FindingInfluencersDemo";

export default function InfluencerFinderLandingPage() {
  const pillars = [
    {
      number: "01",
      title: "Confident influencers prefer performance",
      desc:
        "High-converting influencers care about commission, not just flat fees. They believe they can sell, so they want upside.",
      bullets: [
        "Ask about commission structure",
        "Open to performance-based deals",
        "Care about outcomes, not just exposure",
      ],
      takeaway: "They win only if you win.",
    },
    {
      number: "02",
      title: "Real comments reveal real buying intent",
      desc:
        "A strong comment section is full of real product questions, not empty hype. That is where purchase intent shows up.",
      bullets: [
        'Questions like “Where can I buy?”',
        'Concerns like “Is it true to size?”',
        "Influencers who actually reply and reduce hesitation",
      ],
      takeaway: "Real questions usually mean real buyers.",
    },
    {
      number: "03",
      title: "Past sales content leaves patterns",
      desc:
        "The fastest way to judge selling ability is to look at historical product content. Good influencers repeat strong conversion behaviors.",
      bullets: [
        "Clear use case demonstrations",
        "Strong product positioning",
        "Natural but visible purchase guidance",
      ],
      takeaway: "Good sellers leave signals behind.",
    },
    {
      number: "04",
      title: "The best ads do not feel like ads",
      desc:
        "Top influencers know how to integrate products into daily life, routines, and stories without making the content feel forced.",
      bullets: [
        "Product fits into the creator’s world",
        "Story-led or lifestyle-led integration",
        "Less interruption, more trust",
      ],
      takeaway: "Native integration drives attention and action.",
    },
  ];

  const metrics = [
    { label: "Follower count", muted: true },
    { label: "Raw views", muted: true },
    { label: "Aesthetic content", muted: true },
    { label: "Comment intent", muted: false },
    { label: "Conversion patterns", muted: false },
    { label: "Influencer motivation", muted: false },
    { label: "Audience trust", muted: false },
  ];

  const sampleInfluencers = [
    {
      name: "Samantha H.",
      handle: "@samunhinged1",
      platform: "TikTok",
      followers: "18K",
      tags: ["Replies to buyers", "Commission-friendly", "Strong product demos"],
    },
    {
      name: "Hannah R.",
      handle: "@hannaricketts",
      platform: "YouTube",
      followers: "10K",
      tags: ["Natural product placement", "Vlog integration", "High trust content"],
    },
    {
      name: "Micro Influencer",
      handle: "@desksetupdaily",
      platform: "Instagram",
      followers: "7K",
      tags: ["Use-case led", "Purchase cues", "Niche audience fit"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5c8c6] font-sans text-[#111111] antialiased">
      <main>
        <div className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[linear-gradient(180deg,#cfc2f7_0%,#d8c8f4_10%,#dcc8ea_22%,#e6c4ea_38%,#edc9dc_55%,#f1c7cf_72%,#f5c8c6_88%,#f5c8c6_100%)] shadow-[inset_0_-40px_60px_-20px_rgba(245,200,198,0.85)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_95%_65%_at_50%_-18%,rgba(255,255,255,0.55),transparent_52%)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_70%_50%_at_0%_30%,rgba(210,190,255,0.35),transparent_55%)] after:content-['']">
          <div className="relative z-10 shrink-0 overflow-hidden border-b border-white/40 px-4 py-1.5 text-center text-[11px] font-medium leading-snug text-black/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] sm:text-xs md:text-sm">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_160%_at_75%_-40%,rgba(255,255,255,0.55),transparent_50%),radial-gradient(ellipse_70%_120%_at_0%_50%,rgba(200,170,255,0.35),transparent_45%),linear-gradient(98deg,#f0e8fc_0%,#dcc8ea_38%,#e2c0e6_62%,#ebd4f4_100%)]"
            />
            <div className="relative">
              <span className="font-bold">Stop</span> chasing <span className="font-bold">views</span>,{" "}
              <span className="font-bold">start</span> choosing influencers that <span className="font-bold">convert</span>.
            </div>
          </div>

          <header className="relative z-10 shrink-0 px-4 pb-1 pt-2 md:px-8 md:pb-1.5 md:pt-2.5">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
              <div
                className="shrink-0 font-logo text-2xl font-extrabold text-black antialiased [font-variant-ligatures:common-ligatures] [text-rendering:optimizeLegibility] md:text-3xl lg:text-[2rem]"
                aria-label="iFinder"
              >
                {"i\uFB01nder"}
              </div>
              <button
                type="button"
                className="shrink-0 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-900 md:px-5 md:py-2.5 md:text-sm"
              >
                Log in
              </button>
            </div>
          </header>

          <section className="relative z-10 flex min-h-0 flex-1 flex-col px-4 pb-4 pt-1 md:px-8 md:pb-5 md:pt-2">
            <div className="mx-auto flex min-h-0 w-full max-w-[100rem] flex-1 flex-col text-center">
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-1 py-3 sm:px-3 sm:py-4 md:py-5">
                <h1
                  className="mx-auto w-full max-w-[min(100%,82vw)] text-center font-black uppercase tracking-[-0.05em] text-black sm:max-w-[min(100%,38rem)] md:max-w-[min(100%,44rem)] lg:max-w-[min(100%,50rem)]"
                  style={{
                    fontSize: "clamp(5rem, min(17vh, 22vw), 26rem)",
                    lineHeight: 0.86,
                  }}
                >
                  FIND
                  <br />
                  INFLUENCERS
                  <br />
                  THAT SELL,
                  <br />
                  NOT JUST
                  <br />
                  PERFORM
                </h1>
              </div>

              <div className="mx-auto mt-6 inline-flex max-w-full flex-shrink-0 flex-wrap items-center justify-center gap-3 rounded-full border border-black/10 bg-white/40 px-4 py-2.5 text-[11px] font-semibold leading-snug text-black shadow-sm backdrop-blur-sm sm:mt-8 sm:gap-4 sm:px-5 sm:py-3 sm:text-xs md:text-sm">
                <span>Discover influencers with real conversion signals</span>
                <span className="shrink-0 font-medium text-black/35" aria-hidden>
                  |
                </span>
                <span>TikTok · Instagram · YouTube</span>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-black/70 sm:mt-8 sm:text-sm md:text-base">
                Most tools help you find more influencers. iFinder helps you find the right ones — influencers with
                stronger conversion potential and better audience fit.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:mt-8 sm:flex-row sm:gap-3">
                <button
                  type="button"
                  className="rounded-2xl bg-black px-5 py-2.5 text-xs font-semibold text-white transition hover:translate-y-[-1px] sm:text-sm md:px-6 md:py-3"
                >
                  Start finding influencers
                </button>
                <a
                  href="#problem"
                  className="rounded-2xl bg-white/35 px-5 py-2.5 text-xs font-semibold text-black ring-1 ring-black/10 backdrop-blur-sm transition hover:bg-white/50 sm:text-sm md:px-6 md:py-3"
                >
                  See how we evaluate fit
                </a>
              </div>

              <FindingInfluencersDemo />
            </div>
          </section>
        </div>

        <section id="problem" className="scroll-mt-8 px-4 py-5 md:scroll-mt-10 md:px-8 md:py-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_10px_0_rgba(0,0,0,0.05)] md:p-8">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">The problem</div>
              <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-6xl">
                High views.
                <br />
                Low sales.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
                Brands often choose influencers by vanity metrics: follower count, views, or overall polish. But
                conversion rarely comes from size alone. It comes from confidence, trust, comment intent, and how
                naturally a creator can move a buyer toward action.
              </p>
              <div className="mt-5 rounded-[1.5rem] bg-[#f8efee] p-5 ring-1 ring-black/5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                  What most brands look at
                </div>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {metrics
                    .filter((m) => m.muted)
                    .map((item) => (
                      <span
                        key={item.label}
                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black/65 ring-1 ring-black/8 md:text-base"
                      >
                        {item.label}
                      </span>
                    ))}
                </div>
                <div className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                  What actually drives sales
                </div>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {metrics
                    .filter((m) => !m.muted)
                    .map((item) => (
                      <span
                        key={item.label}
                        className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white md:text-base"
                      >
                        {item.label}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#111111] p-6 text-white shadow-[0_10px_0_rgba(0,0,0,0.08)] md:p-8">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">The shift</div>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.04em] md:text-5xl">
                Follower count does not equal conversion
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                A 10K creator with trusted product content can outperform a 500K creator with weak purchase intent. The
                real question is not “Who is bigger?” It is “Who is more likely to move a buyer?”
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Does this creator respond to real buyer questions?",
                  "Have they shown strong sales behavior before?",
                  "Do they care about performance, not just fees?",
                  "Can they integrate products naturally into content?",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3.5 ring-1 ring-white/10">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f5c8c6]" />
                    <p className="text-base text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="framework" className="px-4 py-6 md:px-8 md:py-9">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">The framework</div>
              <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-7xl">
                Four signals of a high-converting creator
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl">
                We do not believe “good influencers” are defined by scale alone. We look for repeatable indicators that
                suggest stronger purchase intent and more reliable selling behavior.
              </p>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-[2rem] bg-white p-6 shadow-[0_10px_0_rgba(0,0,0,0.05)] md:p-8"
                >
                  <span className="inline-flex rounded-full bg-[#f6dedd] px-4 py-2 text-sm font-bold uppercase tracking-wide text-black/60">
                    Signal {pillar.number}
                  </span>
                  <h3 className="mt-3 max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.03em] md:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-black/72 md:text-lg">{pillar.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-base text-black/82 md:text-lg">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-[1.25rem] bg-[#faf4f3] px-4 py-3 text-base font-semibold text-black/75 ring-1 ring-black/6">
                    {pillar.takeaway}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="px-4 py-6 md:px-8 md:py-9">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#111111] p-6 text-white shadow-[0_12px_0_rgba(0,0,0,0.08)] md:p-10">
            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">Why iFinder</div>
                <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-7xl">
                  This is exactly what we optimize for
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                  Most tools help you find influencers. iFinder helps you find high-converting influencers. We are not
                  trying to give you more names. We are trying to give you better bets.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/7 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">We do not optimize for</div>
                    <div className="mt-3 space-y-2 text-base text-white/85">
                      <div>Vanity metrics</div>
                      <div>Influencer volume</div>
                      <div>Pretty but weak content</div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#f5c8c6] p-4 text-black ring-1 ring-white/5">
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">We prioritize</div>
                    <div className="mt-3 space-y-2 text-base font-semibold text-black/90">
                      <div>Comment quality</div>
                      <div>Sales-friendly behavior</div>
                      <div>Natural product integration</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-5 text-black shadow-[0_10px_0_rgba(0,0,0,0.06)] md:p-6">
                <div className="flex items-center justify-between gap-3 border-b border-black/8 pb-3">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-black/40">Sample output</div>
                    <div className="mt-1.5 text-2xl font-black uppercase tracking-[-0.03em]">
                      What a better shortlist looks like
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-[#f6dedd] px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm">
                    Curated quality
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {sampleInfluencers.map((creator) => (
                    <div key={creator.handle} className="rounded-[1.5rem] bg-[#fbf6f5] p-4 ring-1 ring-black/6">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-lg font-black text-white">
                            {creator.name.charAt(0)}
                          </div>
                          <div
                            className="min-w-0 select-none blur-[3px]"
                            aria-hidden="true"
                            title="Unlock to view full profile"
                          >
                            <div className="truncate text-lg font-black">{creator.name}</div>
                            <div className="truncate text-sm font-medium text-black/55">
                              {creator.handle} · {creator.platform}
                            </div>
                          </div>
                          <span className="sr-only">
                            {creator.name}, {creator.handle}, {creator.platform}
                          </span>
                        </div>
                        <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/8">
                          {creator.followers}
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {creator.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-black/75 ring-1 ring-black/7"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="px-4 pb-5 pt-7 md:px-8 md:pb-8 md:pt-9">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-6 shadow-[0_12px_0_rgba(0,0,0,0.05)] md:p-10">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">Positioning</div>
                <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-6xl">
                  We are not trying to be the biggest database
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
                  We are building a tighter, more opinionated iFinder — one that educates buyers, reframes what good
                  influencer selection looks like, and surfaces influencers that better match real conversion pain points.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#f8efee] p-5 ring-1 ring-black/6 md:p-6">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">Core promise</div>
                <div className="mt-3 text-3xl font-black uppercase leading-tight tracking-[-0.03em] md:text-5xl">
                  Find influencers who drive sales — not just views.
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="rounded-3xl bg-black px-7 py-4 text-lg font-semibold text-white transition hover:translate-y-[-1px]"
                    aria-label="Try iFinder"
                  >
                    <span className="inline-flex items-baseline gap-2.5">
                      <span className="font-sans text-2xl font-extrabold leading-none tracking-tight">Try</span>
                      <span className="font-logo text-xl font-extrabold leading-none normal-case tracking-tight [font-variant-ligatures:common-ligatures]">
                        {"i\uFB01nder"}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosMarquee />
      </main>
    </div>
  );
}
