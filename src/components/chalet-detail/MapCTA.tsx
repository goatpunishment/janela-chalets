import type { MapLink } from "@/data/chalets";
import { Reveal } from "@/components/ui/Reveal";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function MapCTA({ maps, location }: { maps: MapLink[]; location: string }) {
  return (
    <Reveal>
      <div className="rounded-3xl border border-bark/10 bg-cream/50 p-6 sm:p-8">
        <p className="font-body text-sm text-bark/60">{location}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {maps.map((m) => (
            <div key={m.url} className="flex flex-col gap-1.5">
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-bark px-6 py-3.5 font-body text-sm font-medium text-coconut transition-colors hover:bg-cacao"
              >
                <PinIcon />
                عرض {m.label} على خرائط Google
              </a>
              {m.note && <span className="px-2 text-xs text-bark/50">{m.note}</span>}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
