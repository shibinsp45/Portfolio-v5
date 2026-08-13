import { useEffect, useState } from "react";

export function PageLoader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setDone(true);
        setTimeout(() => setHidden(true), 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background transition-all duration-700 ${
        done ? "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]" : "opacity-100"
      }`}
    >
      <div className="grid-bg mask-fade absolute inset-0 opacity-60" />
      <div className="glow-orb orb-drift absolute size-[520px]" />

      <div className="relative flex w-[min(78vw,420px)] flex-col items-center gap-6">
        <span className="font-display text-xs uppercase tracking-[0.5em] text-muted-foreground">
          Shibin S P
        </span>
        <div className="h-px w-full overflow-hidden bg-border">
          <div
            className="h-full bg-[linear-gradient(90deg,var(--brand),var(--brand-soft))] transition-[width] duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="font-display text-5xl tabular-nums tracking-tight">
          {String(pct).padStart(3, "0")}
        </div>
      </div>
    </div>
  );
}
