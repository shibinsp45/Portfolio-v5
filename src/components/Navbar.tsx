import { useEffect, useState } from "react";
import { MoreHorizontal, ArrowUpRight } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#principles", label: "Principles" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState<string>("#work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const collapsed = scrolled && !hovered;

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={`glass mx-auto flex items-center justify-between gap-3 rounded-full border border-border/70 py-2 shadow-[0_12px_40px_-18px_var(--glow)] transition-all duration-500 ease-out ${
          collapsed ? "max-w-[220px] px-2" : "max-w-3xl px-3"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 pl-1">
          <span className="relative grid shrink-0 place-items-center">
            <img src={avatar} alt="Shibin SP" className="size-7 rounded-full object-cover" />
            <span className="pulse-ring absolute inset-0 rounded-full border border-[color:var(--brand)]" />
          </span>
          <span
            className={`overflow-hidden whitespace-nowrap font-display text-sm transition-all duration-500 ${
              collapsed ? "max-w-0 opacity-0" : "max-w-[140px] opacity-100"
            }`}
          >
            Shibin SP
          </span>
        </a>

        <div
          className={`hidden items-center gap-1 overflow-hidden text-sm text-muted-foreground transition-all duration-500 lg:flex ${
            collapsed ? "max-w-0 opacity-0" : "max-w-xl opacity-100"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative whitespace-nowrap rounded-full px-3 py-1.5 transition hover:text-foreground active:scale-95 ${
                active === l.href ? "text-foreground" : ""
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[color:var(--brand)]" />
              )}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className={`overflow-hidden transition-all duration-500 ${
              collapsed ? "max-w-0 opacity-0" : "max-w-[80px] opacity-100"
            }`}
          >
            <ThemeToggle />
          </div>
          <a
            href="#connect"
            className="group inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[color:var(--brand)] px-4 py-1.5 text-sm font-medium text-[color:var(--primary-foreground)] transition hover:brightness-110 active:scale-95 dark:text-[color:var(--accent-foreground)]"
          >
            Connect
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span
            aria-hidden="true"
            className={`grid size-8 place-items-center rounded-full text-muted-foreground transition-all duration-500 ${
              collapsed ? "max-w-[32px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <MoreHorizontal className="size-4" />
          </span>
        </div>
      </nav>
    </header>
  );
}
