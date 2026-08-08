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
      className={`inline-block object-contain mix-blend-multiply dark:invert dark:mix-blend-screen ${className ?? ""}`}
      {...props}
    />
  );
}

import about from "@/assets/about.jpg";
import { Navbar } from "@/components/Navbar";
import { PageLoader } from "@/components/PageLoader";


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
  { img: "https://shibinsp45.lovable.app/projects/invoice-generator.jpg", href: "https://shibinsp45.lovable.app/project/invoice-generator", title: "Billzy — Invoice Generator", tag: "A mobile invoice app — create bills faster, manage your shop better." },
  { img: "https://shibinsp45.lovable.app/projects/tools-app.png", href: "https://shibinsp45.lovable.app/project/tools-app", title: "Tools — Emergency Service App", tag: "On-demand tools and repair service — we're here to help you." },
  { img: "https://shibinsp45.lovable.app/projects/fudit-app.png", href: "https://shibinsp45.lovable.app/project/fudit-app", title: "Fudit — AI Food Delivery", tag: "AI-powered food delivery — cravings, delivered to your home." },
  { img: "https://shibinsp45.lovable.app/projects/fitness-app.jpg", href: "https://shibinsp45.lovable.app/project/fitness-app", title: "GetFit — Fitness Tracker", tag: "Personalized fitness tracking — where fitness meets passion." },
  { img: "https://shibinsp45.lovable.app/projects/grocery-app.jpg", href: "https://shibinsp45.lovable.app/project/grocery-app", title: "GroPlan — Grocery Planner", tag: "Smart grocery & meal planning — your smart kitchen buddy." },
  { img: "https://shibinsp45.lovable.app/projects/medicine-vending.png", href: "https://shibinsp45.lovable.app/project/medicine-vending", title: "PROMedic — Emergency Medicine", tag: "Medicine vending — access meds faster during emergencies." },
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
      <PageLoader />

      {/* Sticky glass navbar */}
      <Navbar />


      {/* Main content */}
      <main id="top">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-28 md:pb-44 lg:pt-36 lg:pb-52">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs backdrop-blur">
              <span className="size-2 rounded-full bg-[color:var(--success)]" />
              Open to opportunities
            </div>


            <h2 className="mt-8 text-[32px] md:text-[64px] leading-[1.05] tracking-[-0.04em] font-semibold">
              <span className="text-muted-foreground">
                Hey{"\u00a0"}
                <Sparkles className="inline-block size-[0.55em] -translate-y-[0.1em]" />
                {"\u00a0"}I'm Shibin S P.
              </span>
              <br />
              <span>I'am a Product Designer</span>
            </h2>

            <p className="mt-10 max-w-md text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Welcome to my little corner of the internet.</span>{" "}
              I'm a lead product designer who finds the signal in the noise — then makes it pretty.
            </p>

          </div>
        </section>

        {/* MARQUEE */}
        <div className="sticky top-0 z-10 min-h-screen border-y border-border bg-card overflow-hidden py-5">
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
        <section id="work" className="sticky top-0 z-20 min-h-screen px-6 py-24 md:py-32 bg-background shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.15)]">
          <div className="mx-auto max-w-6xl">
            <h3 className="font-display text-5xl md:text-7xl leading-none">
              My Featured<br />Projects <Sparkles className="inline size-[0.6em] text-accent" />
            </h3>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((p) => (
                <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
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
        <section id="about" className="sticky top-0 z-30 min-h-screen px-6 py-24 md:py-32 bg-card border-y border-border shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.15)]">
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
        <section id="process" className="sticky top-0 z-40 min-h-screen px-6 py-24 md:py-32 bg-background shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.15)]">
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
        <section id="principles" className="sticky top-0 z-50 min-h-screen px-6 py-24 md:py-32 bg-card border-y border-border shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.15)]">
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
        <section id="connect" className="sticky top-0 z-[60] min-h-screen px-6 py-24 md:py-32 bg-background shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.15)]">
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

        <footer className="sticky top-0 z-[70] min-h-screen border-t border-border bg-card px-6 py-10 text-center text-xs text-muted-foreground shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.15)]">
          Designed with intention · © 2026 Shibin SP
        </footer>
      </main>
    </div>
  );
}
