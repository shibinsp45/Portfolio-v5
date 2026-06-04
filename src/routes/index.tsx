import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Briefcase, MessageCircle, Bookmark, ArrowUpRight, Sparkles } from "lucide-react";
import heroStack from "@/assets/hero-stack.png";
import avatar from "@/assets/avatar.jpg";
import about from "@/assets/about.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera — Lead Product Designer" },
      { name: "description", content: "Portfolio of Alex Rivera, a lead product designer crafting GenAI products with clarity and intention." },
      { property: "og:title", content: "Alex Rivera — Lead Product Designer" },
      { property: "og:description", content: "Portfolio of Alex Rivera, a lead product designer crafting GenAI products with clarity and intention." },
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
      {/* Floating Nav Pill */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 hidden md:flex items-center gap-1 rounded-full border border-border bg-card/80 px-2 py-2 shadow-sm backdrop-blur-md">
        <a href="#top" className="flex items-center gap-2 rounded-full pl-2 pr-3 py-1.5 hover:bg-secondary">
          <img src={avatar} alt="" className="size-7 rounded-full object-cover" />
          <span className="text-sm font-medium">Alex Rivera</span>
        </a>
        {[
          ["Work", "#work"],
          ["About", "#about"],
          ["Process", "#process"],
          ["Principles", "#principles"],
        ].map(([l, h]) => (
          <a key={h} href={h} className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">{l}</a>
        ))}
        <a href="#connect" className="ml-1 rounded-full border border-border px-4 py-1.5 text-sm font-medium hover:bg-secondary">Connect</a>
      </nav>

      {/* Profile sidebar (desktop) */}
      <aside className="fixed left-0 top-0 z-40 hidden lg:flex h-screen w-72 flex-col border-r border-border bg-background p-6">
        <div className="relative">
          <img src={avatar} alt="Alex Rivera" className="size-40 rounded-full object-cover" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1 text-xs font-medium text-[color:var(--ring)] shadow-sm whitespace-nowrap">
            <Briefcase className="size-3.5" /> Open to Work
          </span>
        </div>
        <h1 className="mt-8 font-display text-3xl">Alex Rivera</h1>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <span>@alexrivera</span>
          <span>·</span>
          <MapPin className="size-3.5" />
          <span>Malaysia</span>
        </div>
        <p className="mt-2 text-sm font-medium">Lead Product Designer</p>

        <div className="mt-6 text-xs text-muted-foreground">11 years experience includes:</div>
        <div className="mt-3 flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg">V</div>
          <div className="grid size-9 place-items-center rounded-lg bg-accent text-accent-foreground font-display text-lg">A</div>
          <div className="grid size-9 place-items-center rounded-lg bg-secondary text-secondary-foreground font-display text-lg">K</div>
        </div>

        <div className="mt-8 flex gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            <MessageCircle className="size-4" /> Message
          </button>
          <button aria-label="Bookmark" className="grid size-10 place-items-center rounded-full border border-border hover:bg-secondary">
            <Bookmark className="size-4" />
          </button>
        </div>

        <div className="mt-auto text-xs text-muted-foreground">© 2026 Alex's Studio</div>
      </aside>

      {/* Main content */}
      <main id="top" className="lg:pl-72">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs backdrop-blur">
              <span className="size-2 rounded-full bg-[color:var(--success)]" />
              Open to collaborate
            </div>

            <h2 className="font-display mt-8 text-[14vw] md:text-[8.5rem] leading-[0.95] tracking-tight">
              <span>Hi </span>
              <Sparkles className="inline-block size-[0.7em] -translate-y-[0.15em] text-accent" />
              <span> I'm Alex.</span>
              <br />
              <span className="text-faded">Lead Product</span>{" "}
              <span className="text-faded">Designer</span>
            </h2>

            <p className="mt-10 max-w-md text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Welcome to my little corner of the internet.</span>{" "}
              I'm a lead product designer who finds the signal in the noise — then makes it pretty.
            </p>

            <img
              src={heroStack}
              alt="Layered product UI screenshots"
              width={1280}
              height={960}
              className="pointer-events-none absolute right-[-6%] top-16 hidden md:block w-[58%] max-w-[760px] float-slow drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            />
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
              <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Making things with intention,<br /><em className="text-muted-foreground">not just attention.</em>
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
            <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Curious about my work?<br /><em>Find me on LinkedIn.</em>
            </h3>
            <p className="mt-6 text-muted-foreground">Always up for a conversation about design, AI, or what you're working on.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              Connect on LinkedIn <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
          Designed with intention · © 2026 Alex Rivera
        </footer>
      </main>
    </div>
  );
}
