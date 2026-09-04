import { Reveal } from "@/components/ui/Reveal";

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 19c-2-8 2-14 14-15 1 12-5 16-14 15Z" strokeLinejoin="round" />
      <path d="M6 18c4-5 8-8 12-13" strokeLinecap="round" />
    </svg>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {features.map((f, i) => (
        <Reveal key={f} delay={Math.min(i * 0.06, 0.3)}>
          <li className="flex items-center gap-3 rounded-2xl border border-bark/10 bg-cream/40 px-5 py-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bark/8 text-brass">
              <LeafIcon />
            </span>
            <span className="font-body text-[15px] text-bark/85">{f}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
