import type { Review } from "@/data/chalets";
import { Reveal } from "@/components/ui/Reveal";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-brass" aria-label={`${rating} من 5 نجوم`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5Z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection({ reviews, mapsUrl }: { reviews: Review[]; mapsUrl?: string }) {
  if (reviews.length === 0) {
    return (
      <Reveal>
        <div className="rounded-3xl border border-dashed border-bark/20 bg-cream/30 px-8 py-14 text-center">
          <p className="font-accent text-xl text-bark/70">آراء ضيوفنا قادمة قريبًا هنا</p>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-bark/50">
            نعرض هنا فقط تقييمات حقيقية من ضيوفنا على خرائط Google — تابعونا لرؤيتها فور إضافتها.
          </p>
          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-bark/20 px-6 py-3 font-body text-sm text-bark transition-colors hover:bg-bark hover:text-coconut"
            >
              قيّمونا على خرائط Google
            </a>
          )}
        </div>
      </Reveal>
    );
  }

  return (
    <div className="scrollbar-none -mx-5 flex gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
      {reviews.map((r, i) => (
        <Reveal key={r.author + i} delay={i * 0.08} className="w-[80vw] shrink-0 sm:w-auto">
          <div className="h-full rounded-3xl border border-bark/10 bg-coconut p-7">
            <StarRow rating={r.rating} />
            <p className="mt-4 font-body text-[15px] leading-relaxed text-bark/80">&ldquo;{r.text}&rdquo;</p>
            <p className="mt-5 font-body text-sm font-medium text-bark/60">{r.author}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
