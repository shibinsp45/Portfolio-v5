import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const collapsed = scrolled && !hovered;

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={`mx-auto flex items-center justify-between gap-3 rounded-full border border-border/60 bg-background/60 py-2 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 ease-out ${
          collapsed ? "max-w-[240px] px-2" : "max-w-3xl px-3"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 pl-1">
          <img src={avatar} alt="Shibin SP" className="size-7 shrink-0 rounded-full object-cover" />
          <span
            className={`overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 ${
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
              className="whitespace-nowrap rounded-full px-3 py-1.5 transition hover:text-foreground active:scale-95"
            >
              {l.label}
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
            className="whitespace-nowrap rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium transition hover:bg-foreground hover:text-background active:scale-95"
          >
            Connect
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
