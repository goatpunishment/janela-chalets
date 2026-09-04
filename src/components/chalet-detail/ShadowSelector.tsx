import Link from "next/link";
import { cn } from "@/lib/utils";

export function ShadowSelector({
  group,
  current,
}: {
  group: { slug: string; label: string }[];
  current: string;
}) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-bark/15 bg-cream/50 p-1.5">
      {group.map((g) => {
        const active = g.slug === current;
        return (
          <Link
            key={g.slug}
            href={`/chalets/${g.slug}`}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-5 py-2.5 font-body text-sm font-medium transition-colors",
              active ? "bg-bark text-coconut" : "text-bark/70 hover:text-bark"
            )}
          >
            {g.label}
          </Link>
        );
      })}
    </div>
  );
}
