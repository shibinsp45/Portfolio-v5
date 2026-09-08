import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import type { ImgHTMLAttributes } from "react";
import starAsset from "@/assets/star-transparent.png.asset.json";
import about from "@/assets/about.jpg";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GlowCursor } from "@/components/GlowCursor";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { FeaturedProjects } from "@/components/FeaturedProjects";

function Sparkles({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={starAsset.url}
      alt=""
      aria-hidden="true"
      className={`inline-block object-contain dark:invert ${className ?? ""}`}
      {...props}
    />
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shibin SP — Product Designer for GenAI Products" },
      {
        name: "description",
        content:
          "Portfolio of Shibin SP — lead product designer crafting futuristic GenAI products, design systems and mobile experiences with clarity and intention.",
      },
      { property: "og:title", content: "Shibin SP — Product Designer for GenAI Products" },
      {
        property: "og:description",
        content:
          "Portfolio of Shibin SP — lead product designer crafting futuristic GenAI products, design systems and mobile experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://shibinsp45.lovable.app/projects/fudit-app.png" },
      { name: "twitter:image", content: "https://shibinsp45.lovable.app/projects/fudit-app.png" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { img: "https://shibinsp45.lovable.app/projects/invoice-generator.jpg", href: "https://shibinsp45.lovable.app/project/invoice-generator", title: "Billzy — Invoice Generator", tag: "A mobile invoice app — create bills faster, manage your shop better.", year: "2025", kind: "UI/UX Case Study" },
  { img: "https://shibinsp45.lovable.app/projects/tools-app.png", href: "https://shibinsp45.lovable.app/project/tools-app", title: "Tools — Emergency Service App", tag: "On-demand tools and repair service — we're here to help you.", year: "2025", kind: "Web Development" },
  { img: "https://shibinsp45.lovable.app/projects/fudit-app.png", href: "https://shibinsp45.lovable.app/project/fudit-app", title: "Fudit — AI Food Delivery", tag: "AI-powered food delivery — cravings, delivered to your home.", year: "2024", kind: "Generative AI" },
  { img: "https://shibinsp45.lovable.app/projects/fitness-app.jpg", href: "https://shibinsp45.lovable.app/project/fitness-app", title: "GetFit — Fitness Tracker", tag: "Personalized fitness tracking — where fitness meets passion.", year: "2024", kind: "Product Branding", contain: true },
  { img: "https://shibinsp45.lovable.app/projects/grocery-app.jpg", href: "https://shibinsp45.lovable.app/project/grocery-app", title: "GroPlan — Grocery Planner", tag: "Smart grocery & meal planning — your smart kitchen buddy.", year: "2023", kind: "UI/UX Case Study" },
  { img: "https://shibinsp45.lovable.app/projects/medicine-vending.png", href: "https://shibinsp45.lovable.app/project/medicine-vending", title: "PROMedic — Emergency Medicine", tag: "Medicine vending — access meds faster during emergencies.", year: "2023", kind: "Blogs & Articles" },
];


const tools = ["Figma", "Framer", "Webflow", "Rive", "Blender", "Trello", "ChatGPT", "Claude"];
const services = ["Design Systems", "Prototyping", "AI-Powered", "Web / Mobile Apps", "Product Strategy", "Landing Pages", "UX / UI Consultation"];
const experience = [
  ["VoyceMe", "Lead Product Designer", "2024 — Now"],
  ["Kaedim 3D · Awesomic", "Senior Product Designer", "2023 — 2024"],
  ["Medal.tv", "Senior Product Designer", "2022"],
  ["EY Consulting", "Product Designer", "2018 — 2022"],
];
const principles = [
  { n: "01", t: "Sketch ugly, decide fast", d: "Pretty mockups slow teams down. I'd rather make ten rough flows in a day and kill nine of them than spend a week protecting one beautiful idea." },
  { n: "02", t: "Designers should write more", d: "Component docs, decision logs, handoff notes, change rationales. Writing is how design scales beyond one person's head." },
  { n: "03", t: "Tokens over taste", d: "My personal taste isn't a design system. Tokens, rules, and audited components are what let a product feel coherent." },
  { n: "04", t: "Defaults are decisions", d: "The empty state, the placeholder copy, the unsorted list order. These aren't details — they're what users meet first." },
  { n: "05", t: "AI in the loop, not in the driver's seat", d: "Generative tools are great at first drafts, terrible at final judgment. The interesting work is still mine to do." },
  { n: "06", t: "Question the new shiny thing", d: "Every quarter there's a trend promising to change everything. The work that ages well comes from fundamentals, not fashion." },
];
const marqueeItems = ["TUNING MY SUPERBIKE", "ON A WAFFLE DATE", "ORGANIZING FILES", "LISTENING TO LINKIN PARK", "EXPLORING BALI", "VIBE CODING", "MAKING COFFEE"];
const stats = [
  ["10+", "Years designing"],
  ["40+", "Products shipped"],
  ["6", "Featured case studies"],
  ["∞", "Iterations"],
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
      <span className="size-1.5 rounded-full bg-[color:var(--brand)]" />
      {children}
    </div>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <GlowCursor />
      <Navbar />

      <main id="top" className="relative">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-20 pb-32 sm:pt-28 sm:pb-40 md:pt-36 md:pb-52 lg:pt-44 lg:pb-64">
          <div className="grid-bg mask-fade pointer-events-none absolute inset-0 -z-10" />
          <div className="glow-orb orb-drift pointer-events-none absolute -left-40 top-0 -z-10 size-[620px] opacity-70" />
          <div className="glow-orb orb-drift pointer-events-none absolute -right-32 top-40 -z-10 size-[480px] opacity-50 [animation-delay:-6s]" />

          <div className="mx-auto max-w-6xl">
            <Reveal delay={80}>
              <h1 className="text-center font-display text-[38px] leading-[1.02] tracking-[-0.04em] sm:text-[56px] md:text-left md:text-[76px] lg:text-[92px]">
                <span className="block text-muted-foreground">
                  Hey{"\u00a0"}
                  <Sparkles className="inline-block size-[0.5em] -translate-y-[0.08em]" />
                  {"\u00a0"}I'm Shibin S P.
                </span>
                <span className="block text-gradient">Product Designer</span>
              </h1>
            </Reveal>

            <div className="mt-14 flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-between lg:mt-16">
              <Reveal delay={160} className="max-w-lg text-center text-base text-muted-foreground md:text-left md:text-lg">
                <p>
                  <span className="font-semibold text-foreground">
                    Welcome to my little corner of the internet.
                  </span>{" "}
                  I'm a lead product designer who finds the signal in the noise — then makes it pretty.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-7 py-3.5 text-sm font-medium text-[color:var(--primary-foreground)] transition hover:brightness-110 active:scale-95 dark:text-[color:var(--accent-foreground)]"
                  >
                    View selected work
                    <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href="#connect"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition hover:bg-secondary active:scale-95"
                  >
                    Let's talk
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={240} className="grid w-full max-w-md grid-cols-2 gap-4 md:w-auto">
                {stats.map(([v, l]) => (
                  <div
                    key={l}
                    className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-[color:var(--brand)]"
                  >
                    <div className="font-display text-3xl md:text-4xl">{v}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="relative grid place-items-center overflow-hidden border-y border-border bg-card py-20 md:py-28">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="relative flex w-full flex-col gap-8">
            <div className="px-6 text-center">
              <SectionLabel>Off the clock</SectionLabel>
              <h2 className="mt-4 font-display text-3xl md:text-5xl">
                When I'm not designing, I'm probably…
              </h2>
            </div>
            <div className="marquee text-sm font-medium tracking-[0.2em] text-muted-foreground">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                  {item}
                  <Sparkles className="size-3.5" />
                </span>
              ))}
            </div>
            <div className="marquee marquee-reverse text-sm font-medium tracking-[0.2em] text-muted-foreground/60">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                  {item}
                  <Sparkles className="size-3.5" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED WORK */}
        <FeaturedProjects projects={projects} />

        {/* ABOUT */}
        <section
          id="about"
          className="relative overflow-hidden border-y border-border bg-card px-6 py-20 md:py-28"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-5">
                <SectionLabel>About</SectionLabel>
                <h2 className="font-display text-3xl leading-[1.05] md:text-4xl">
                  <span className="text-muted-foreground">Making things with intention,</span>
                  <br />
                  <span className="text-gradient">not just attention.</span>
                </h2>
                <TiltCard max={5} className="overflow-hidden rounded-2xl">
                  <img
                    src={about}
                    alt="Shibin SP at work"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </TiltCard>
                <div className="flex gap-3">
                  <a href="#" className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-[color:var(--brand)] hover:text-foreground">Dribbble</a>
                  <a href="#" className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-[color:var(--brand)] hover:text-foreground">LinkedIn</a>
                </div>
              </div>

              <div className="flex flex-col gap-5 text-[15px] leading-relaxed md:gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                    Where I've been
                  </div>
                  <div className="mt-3 divide-y divide-border border-y border-border">
                    {experience.map(([co, role, when]) => (
                      <div
                        key={co}
                        className="group grid grid-cols-[1fr_auto] gap-4 py-3 transition hover:pl-2"
                      >
                        <div>
                          <div className="font-medium transition group-hover:text-[color:var(--brand)]">{co}</div>
                          <div className="text-sm text-muted-foreground">{role}</div>
                        </div>
                        <div className="self-center text-sm text-muted-foreground">{when}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p><span className="font-semibold">I've spent over a decade learning that good design is mostly listening.</span> I started in consulting at EY, moved into consumer gaming at Medal, then AI tooling at Kaedim, and now I lead design for GenAI products at VoyceMe.</p>
                <p><span className="font-semibold">Right now I'm deep in generative AI</span>, designing how people create stories, characters, and worlds with tools that didn't exist years ago.</p>
                <p><span className="font-semibold">I care about the small things</span> — the wording on an empty state, the weight of a button press, the rhythm of a flow. That's where trust gets built.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS / TOOLS */}
        <section
          id="process"
          className="relative overflow-hidden bg-background px-6 py-20 md:py-28"
        >
          <div className="grid-bg mask-fade pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative mx-auto flex max-w-6xl flex-col">
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-7xl">
              Good design
              <br />
              <span className="text-gradient">ships and keeps moving</span>
            </h2>

            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <Reveal>
                <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                  Tools I live in
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[color:var(--brand)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                  What I do
                </div>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[color:var(--brand)] px-4 py-2 text-sm text-[color:var(--primary-foreground)] transition hover:-translate-y-0.5 hover:brightness-110 dark:text-[color:var(--accent-foreground)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section
          id="principles"
          className="relative overflow-hidden border-y border-border bg-card px-6 py-20 md:py-28"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            <SectionLabel>Principles</SectionLabel>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-7xl">
              How I think
              <br />
              <span className="text-muted-foreground">about my work</span>
            </h2>
            <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.n} delay={i * 60}>
                  <div className="group flex gap-5 rounded-2xl border border-transparent p-3 transition hover:border-border hover:bg-background/40">
                    <div className="font-display text-3xl tabular-nums text-muted-foreground transition group-hover:text-[color:var(--brand)]">
                      {p.n}
                    </div>
                    <div>
                      <h3 className="font-semibold">{p.t}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section
          id="connect"
          className="relative grid place-items-center overflow-hidden bg-background px-6 py-24 md:py-36"
        >
          <div className="grid-bg mask-fade pointer-events-none absolute inset-0" />
          <div className="glow-orb orb-drift pointer-events-none absolute size-[600px] opacity-70" />
          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel>Connect</SectionLabel>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              <span className="text-muted-foreground">Curious about my work?</span>
              <br />
              <span className="text-gradient">Find me on LinkedIn.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Always up for a conversation about design, AI, or what you're working on.
            </p>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-7 py-3.5 text-sm font-medium text-[color:var(--primary-foreground)] transition hover:brightness-110 active:scale-95 dark:text-[color:var(--accent-foreground)]"
            >
              Connect on LinkedIn
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>

        <footer className="relative border-t border-border bg-card px-6 py-12 text-center text-xs text-muted-foreground">
          Designed with intention · © 2026 Shibin SP
        </footer>
      </main>
    </div>
  );
}
