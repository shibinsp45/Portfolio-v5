import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export type Project = {
  img: string;
  href: string;
  title: string;
  tag: string;
  year: string;
  kind: string;
  contain?: boolean;
};

const spring = { type: "spring" as const, stiffness: 90, damping: 18, mass: 0.9 };

function Card({ p, index }: { p: Project; index: number }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-sheen group block h-full rounded-[2rem] border border-border/30 bg-card/50 p-4 backdrop-blur-2xl transition duration-500 hover:border-[color:var(--electric)] md:p-6"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ${
          p.contain ? "bg-secondary p-8" : "bg-secondary"
        }`}
      >
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className={`size-full transition-transform duration-700 group-hover:scale-105 ${
            p.contain ? "object-contain" : "object-cover"
          }`}
        />
        <span className="absolute left-3 top-3 rounded-full border border-border/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
          {p.kind}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[color:var(--electric)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
          {p.year}
        </span>
      </div>

      <div className="px-1 pb-1 pt-5 md:pt-6">
        <h3 className="font-display text-xl font-semibold tracking-[-0.03em] md:text-2xl">
          {p.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{p.tag}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--pop)] transition-colors duration-300 group-hover:text-[color:var(--electric)]">
          Peek inside
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
      <span className="sr-only">{index}</span>
    </a>
  );
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 py-14 md:py-20"
      style={{ background: "var(--projects-bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[color:var(--pop)]" />
              Selected work
            </div>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.045em] md:text-6xl">
              My Featured Projects
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {String(projects.length).padStart(2, "0")} case studies
          </span>
        </div>

        {/* Desktop: 2-column grid */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: (i % 2) * 0.08 }}
              className="h-full"
            >
              <Card p={p} index={i} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: sticky parallax stack */}
        <div className="mt-8 md:hidden">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="sticky top-24 pb-6"
              style={{ zIndex: i + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={spring}
                className="rounded-[2rem] bg-background shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.35)]"
              >
                <Card p={p} index={i} />
              </motion.div>
            </div>
          ))}
          <div className="h-6" />
        </div>
      </div>
    </section>
  );
}
