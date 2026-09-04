import { ChaletMedia } from "@/components/ChaletMedia";

export function ChaletDetailHero({
  name,
  location,
  tagline,
  heroSrc,
  slug,
}: {
  name: string;
  location: string;
  tagline: string;
  heroSrc: string | null;
  slug: string;
}) {
  return (
    <section className="relative flex h-[78svh] min-h-[520px] items-end overflow-hidden">
      <div className="absolute inset-0">
        <ChaletMedia src={heroSrc} seed={`${slug}-hero`} alt={`${name} — ${location}`} priority sizes="100vw" />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(22,16,11,0.85) 0%, rgba(22,16,11,0.25) 55%, rgba(22,16,11,0.05) 100%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-coconut/15 px-4 py-1.5 font-body text-xs font-medium text-coconut backdrop-blur-sm">
          {location}
        </span>
        <h1 className="mt-5 font-display text-5xl text-coconut sm:text-6xl md:text-7xl">{name}</h1>
        <p className="mt-4 max-w-xl font-accent text-xl text-coconut/85 sm:text-2xl">{tagline}</p>
      </div>
    </section>
  );
}
