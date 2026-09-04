import type { PriceRow } from "@/data/chalets";
import { formatSAR } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function PricingTable({ pricing }: { pricing: PriceRow[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {pricing.map((row, i) => (
        <Reveal key={row.label} delay={i * 0.08}>
          <div className="flex flex-col items-center rounded-3xl border border-bark/10 bg-coconut px-6 py-9 text-center shadow-[0_1px_0_0_rgba(74,46,31,0.06)]">
            <span className="font-body text-sm text-bark/60">{row.label}</span>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-display text-5xl text-bark">{formatSAR(row.price)}</span>
              <span className="font-body text-sm text-bark/60">ر.س</span>
            </div>
            <span className="mt-2 font-body text-xs text-bark/45">لليلة الواحدة</span>
            {row.note && <span className="mt-3 text-xs text-brass">{row.note}</span>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
