import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 900);
    const t2 = setTimeout(() => setHidden(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="size-9 animate-spin rounded-full border-2 border-border border-t-foreground" />
        <div className="h-px w-40 overflow-hidden bg-border">
          <div className="loader-bar h-full w-1/3 bg-foreground" />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Shibin SP</span>
      </div>
    </div>
  );
}
