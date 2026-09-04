import { cn } from "@/lib/utils";

// Art-directed stand-in for a photograph that hasn't been supplied yet.
// Deterministic per `seed` so a gallery of placeholders reads as a varied,
// considered set rather than one tile repeated — but never claims to be a
// real photo: every instance carries a small, honest "معاينة" tag so no one
// mistakes it for finished photography once real images are swapped in via
// `public/chalets/<slug>/`.

const PALETTES = [
  ["#efe1c8", "#c99a6b", "#4a2e1f"],
  ["#f0e4cf", "#a9764b", "#2b1a12"],
  ["#e9dcc2", "#8a6b4a", "#3a2417"],
  ["#f4ead6", "#b08a55", "#4a2e1f"],
  ["#ece0c9", "#6f7a52", "#2b1a12"],
] as const;

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function PlaceholderPlate({
  seed,
  label,
  className,
  icon = "window",
}: {
  seed: string;
  label?: string;
  className?: string;
  icon?: "window" | "leaf" | "coconut";
}) {
  const h = hash(seed);
  const palette = PALETTES[h % PALETTES.length];
  const angle = 25 + (h % 110);

  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden",
        className
      )}
      style={{
        background: `linear-gradient(${angle}deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})`,
      }}
      role="img"
      aria-label={label ? `صورة توضيحية — ${label}` : "صورة توضيحية"}
    >
      <div className="grain-overlay" aria-hidden />
      <svg
        aria-hidden
        viewBox="0 0 120 120"
        className="h-16 w-16 opacity-30 sm:h-20 sm:w-20"
        style={{ color: palette[0] }}
      >
        {icon === "window" && (
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="22" y="18" width="76" height="86" rx="2" />
            <path d="M60 18v86M22 61h76" />
          </g>
        )}
        {icon === "leaf" && (
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M30 100C20 60 40 25 95 20c5 55-25 82-65 80Zm3-3C58 68 80 45 92 24"
          />
        )}
        {icon === "coconut" && (
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="60" cy="65" r="34" />
            <circle cx="50" cy="58" r="5" />
            <circle cx="70" cy="58" r="5" />
            <circle cx="60" cy="74" r="5" />
          </g>
        )}
      </svg>
      {label && (
        <span
          className="pointer-events-none absolute bottom-3 right-3 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm sm:bottom-4 sm:right-4"
          style={{ background: "rgba(23,16,11,0.35)", color: palette[0] }}
        >
          معاينة
        </span>
      )}
    </div>
  );
}
