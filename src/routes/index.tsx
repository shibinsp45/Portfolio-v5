import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Briefcase, MessageCircle, Bookmark, ArrowUpRight } from "lucide-react";
import type { ImgHTMLAttributes } from "react";
import starAsset from "@/assets/star.png.asset.json";

function Sparkles({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={starAsset.url}
      alt=""
      aria-hidden="true"
      className={`inline-block object-contain mix-blend-multiply ${className ?? ""}`}
      {...props}
    />
  );
}

import avatar from "@/assets/avatar.jpg";
import about from "@/assets/about.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shibin SP — Lead Product Designer" },
      { name: "description", content: "Portfolio of Shibin SP, a lead product designer crafting GenAI products with clarity and intention." },
      { property: "og:title", content: "Shibin SP — Lead Product Designer" },
      { property: "og:description", content: "Portfolio of Shibin SP, a lead product designer crafting GenAI products with clarity and intention." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { img: p1, title: "FableVerse by VoyceMe", tag: "Gen-AI for the animanga-verse" },
  { img: p2, title: "Medal.tv", tag: "Built for 8 million gamers who clip, share, compete." },
  { img: p3, title: "Kaedim 3D", tag: "Turning 2D concept art into game-ready 3D in minutes." },
  { img: p4, title: "Topsort", tag: "AI ad server platform boosting retail performance." },
];

const tools = ["Figma", "Framer", "Webflow", "Rive", "Blender", "Trello", "ChatGPT", "Claude"];
const services = ["Design Systems", "Prototyping", "AI-Powered", "Web / Mobile Apps", "Product Strategy", "Landing Pages", "UX / UI Consultation"];
const principles = [
  { n: "01", t: "Sketch ugly, decide fast", d: "Pretty mockups slow teams down. I'd rather make ten rough flows in a day and kill nine of them than spend a week protecting one beautiful idea." },
  { n: "02", t: "Designers should write more", d: "Component docs, decision logs, handoff notes, change rationales. Writing is how design scales beyond one person's head." },
  { n: "03", t: "Tokens over taste", d: "My personal taste isn't a design system. Tokens, rules, and audited components are what let a product feel coherent." },
  { n: "04", t: "Defaults are decisions", d: "The empty state, the placeholder copy, the unsorted list order. These aren't details — they're what users meet first." },
  { n: "05", t: "AI in the loop, not in the driver's seat", d: "Generative tools are great at first drafts, terrible at final judgment. The interesting work is still mine to do." },
  { n: "06", t: "Question the new shiny thing", d: "Every quarter there's a trend promising to change everything. The work that ages well comes from fundamentals, not fashion." },
];
const marqueeItems = ["TUNING MY SUPERBIKE", "ON A WAFFLE DATE", "ORGANIZING FILES", "LISTENING TO LINKIN PARK", "EXPLORING BALI", "VIBE CODING", "MAKING COFFEE"];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Glass Nav */}
      <div className="sticky top-4 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1 rounded-full border border-white/40 bg-white/25 px-2 py-1.5 shadow-lg shadow-black/5 backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 hover:bg-white/30">
            <img src={avatar} alt="" className="size-7 rounded-full object-cover" />
            <span className="text-sm font-medium">Shibin SP</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {[
              ["About", "#about"],
              ["Process", "#process"],
              ["Principles", "#principles"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">{l}</a>
            ))}
            <a href="#connect" className="ml-1 rounded-full border border-foreground/80 px-4 py-1.5 text-sm font-medium hover:bg-white/30">Connect</a>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <main id="top">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mx-auto max-w-6xl">
            {/* Avatar pill */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-2 py-1.5 backdrop-blur">
                <img src={avatar} alt="" className="size-8 rounded-full object-cover" />
                <span className="text-sm font-semibold">Shibin SP</span>
                <span className="flex items-center gap-1 pr-2">
                  <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                  <span className="size-2 rounded-full bg-foreground" />
                  <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                </span>
              </div>
            </div>

            <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs backdrop-blur">
              <span className="size-2 rounded-full bg-[color:var(--success)]" />
              Open to opportunities
            </div>

            <h2 className="mt-8 text-[14vw] md:text-[7rem] leading-[1] tracking-[-0.04em] font-semibold">
              <span className="text-muted-foreground">
                Hi{" "}
                <Sparkles className="inline-block size-[0.55em] -translate-y-[0.1em]" />
                {" "}I'm Shibin.
              </span>
              <br />
              <span>Lead Product Designer</span>
            </h2>

            <p className="mt-10 max-w-md text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Welcome to my little corner of the internet.</span>{" "}
              I'm a lead product designer who finds the signal in the noise — then makes it pretty.
            </p>

          </div>
        </section>

        {/* MARQUEE */}
        <div className="border-y border-border bg-card/50 overflow-hidden py-5">
          <div className="marquee text-sm font-medium tracking-[0.2em] text-muted-foreground">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-12">
                {item}
                <Sparkles className="size-3.5 text-accent" />
              </span>
            ))}
          </div>
        </div>

        {/* FEATURED WORK */}
        <section id="work" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h3 className="font-display text-5xl md:text-7xl leading-none">
              Featured<br />Projects <Sparkles className="inline size-[0.6em] text-accent" />
            </h3>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((p) => (
                <a key={p.title} href="#" className="group block">
                  <div className="overflow-hidden rounded-2xl bg-card border border-border aspect-[4/3]">
                    <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h4 className="font-display text-2xl">{p.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground max-w-md">{p.tag}</p>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium underline-offset-4 group-hover:underline">
                      Peek inside <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary">
                View all my projects <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 py-24 md:py-32 bg-card/40 border-y border-border">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6">
              <h3 className="font-display text-5xl md:text-6xl">
                <span className="text-muted-foreground">Making things with intention,</span><br /><span>not just attention.</span>
              </h3>
              <img src={about} alt="" loading="lazy" className="rounded-2xl w-full object-cover aspect-[3/4] max-w-md" />
              <div className="flex gap-3">
                <a href="#" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">Dribbble</a>
                <a href="#" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">LinkedIn</a>
              </div>
            </div>

            <div className="space-y-8 text-[15px] leading-relaxed">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Where I've been</div>
                <div className="mt-4 divide-y divide-border border-y border-border">
                  {[
                    ["VoyceMe", "Lead Product Designer", "2024 — Now"],
                    ["Kaedim 3D · Awesomic", "Senior Product Designer", "2023 — 2024"],
                    ["Medal.tv", "Senior Product Designer", "2022"],
                    ["EY Consulting", "Product Designer", "2018 — 2022"],
                  ].map(([co, role, when]) => (
                    <div key={co} className="grid grid-cols-[1fr_auto] gap-4 py-4">
                      <div>
                        <div className="font-medium">{co}</div>
                        <div className="text-sm text-muted-foreground">{role}</div>
                      </div>
                      <div className="text-sm text-muted-foreground self-center">{when}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p><span className="font-semibold">I've spent over a decade learning that good design is mostly listening.</span> I started in consulting at EY, moved into consumer gaming at Medal, then AI tooling at Kaedim, and now I lead design for GenAI products at VoyceMe.</p>
              <p><span className="font-semibold">Right now I'm deep in generative AI</span>, designing how millions of people create stories, characters, and worlds with tools that didn't exist years ago. Messy, fast, genuinely new — I like it that way.</p>
              <p><span className="font-semibold">I care a lot about the small things</span> — the wording on an empty state, the weight of a button press, the rhythm of a flow. That's where trust gets built.</p>
            </div>
          </div>
        </section>

        {/* PROCESS / TOOLS */}
        <section id="process" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h3 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Good design<br />ships and keeps moving
            </h3>

            <div className="mt-12 grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Tools I live in</div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">What I do</div>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span key={s} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section id="principles" className="px-6 py-24 md:py-32 bg-card/40 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <h3 className="font-display text-5xl md:text-7xl leading-[0.95]">
              How I think<br />about my work
            </h3>
            <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-10">
              {principles.map((p) => (
                <div key={p.n} className="flex gap-5">
                  <div className="font-display text-3xl text-muted-foreground tabular-nums">{p.n}</div>
                  <div>
                    <h4 className="font-semibold">{p.t}</h4>
                    <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-5xl md:text-6xl">
              <span className="text-muted-foreground">Curious about my work?</span><br /><span>Find me on LinkedIn.</span>
            </h3>
            <p className="mt-6 text-muted-foreground">Always up for a conversation about design, AI, or what you're working on.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              Connect on LinkedIn <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
          Designed with intention · © 2026 Shibin SP
        </footer>
      </main>
    </div>
  );
}
