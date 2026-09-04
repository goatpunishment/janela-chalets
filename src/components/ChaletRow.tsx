"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Chalet } from "@/data/chalets";
import { ChaletMedia } from "@/components/ChaletMedia";
import { ordinalTag } from "@/lib/numerals";
import { cn } from "@/lib/utils";

export function ChaletRow({
  chalet,
  index,
  heroSrc,
  reversed,
}: {
  chalet: Chalet;
  index: number;
  heroSrc: string | null;
  reversed: boolean;
}) {
  return (
    <Link
      href={`/chalets/${chalet.slug}`}
      className="group relative grid items-center gap-6 py-14 first:pt-0 last:pb-0 sm:py-20 lg:grid-cols-12 lg:gap-4"
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-cream sm:aspect-[16/10] lg:col-span-7 lg:aspect-[4/5]",
          reversed ? "lg:col-start-6 lg:row-start-1" : "lg:col-start-1"
        )}
      >
        <motion.div
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        >
          <ChaletMedia src={heroSrc} alt={`${chalet.name} — ${chalet.location}`} seed={chalet.slug} sizes="(min-width: 1024px) 55vw, 100vw" />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: "-100%" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.75, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 bg-bark"
        />

        <span className="absolute right-5 top-5 z-20 rounded-full bg-coconut/90 px-3.5 py-1.5 font-body text-xs font-medium text-bark backdrop-blur-sm">
          {chalet.location}
        </span>
      </div>

      <div
        className={cn(
          "relative lg:col-span-6",
          reversed ? "lg:col-start-1 lg:row-start-1 lg:pr-4" : "lg:col-start-8 lg:pl-4"
        )}
      >
        <span className="font-accent text-lg text-brass">{ordinalTag(index + 1)}</span>
        <h3 className="mt-3 font-display text-4xl text-bark transition-colors sm:text-5xl">{chalet.name}</h3>
        <p className="mt-4 max-w-md font-body text-base leading-relaxed text-bark/70 sm:text-lg">
          {chalet.tagline}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {chalet.features.slice(0, 3).map((f) => (
            <li key={f} className="rounded-full border border-bark/15 px-3.5 py-1.5 text-xs text-bark/65">
              {f}
            </li>
          ))}
        </ul>

        <span className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-bark">
          استكشف الشاليه
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden
          >
            <path d="M12.5 5 6.5 10l6 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
