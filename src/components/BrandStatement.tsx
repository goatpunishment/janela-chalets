import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-bark py-28 text-coconut sm:py-36">
      <div className="grain-overlay" aria-hidden />
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-coconut/[0.05]"
        aria-hidden
      >
        <rect x="60" y="40" width="280" height="320" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M200 40v320M60 200h280" stroke="currentColor" strokeWidth="3" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="font-body text-xs font-medium tracking-[0.35em] text-brass">عن Janela</span>
          <p className="mt-8 text-balance font-accent text-3xl leading-[1.6] sm:text-4xl md:text-5xl">
            Janela تعني نافذة. وكل شاليه لدينا هو نافذتك على إجازة مختلفة —
            بعيدًا عن صخب اليوميات، وقريبًا من الراحة التي تستحقها.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/about"
            className="mt-12 inline-flex items-center justify-center rounded-full border border-coconut/25 px-8 py-3.5 font-body text-sm font-medium text-coconut transition-colors hover:bg-coconut hover:text-bark"
          >
            تعرّف على Janela أكثر
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
