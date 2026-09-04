"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChaletMedia } from "@/components/ChaletMedia";
import { Reveal } from "@/components/ui/Reveal";

type GalleryItem = { src: string | null; seed: string };

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  const d = dir === "left" ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6";
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Gallery({
  items,
  chaletName,
}: {
  items: GalleryItem[];
  chaletName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const go = useCallback(
    (delta: number) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        return (i + delta + items.length) % items.length;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.documentElement.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(1);
      if (e.key === "ArrowRight") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, go]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.seed} delay={Math.min(i * 0.06, 0.4)} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpenIndex(i);
              }}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              aria-label={`فتح صورة ${i + 1} من ${items.length} — ${chaletName}`}
            >
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                <ChaletMedia
                  src={item.src}
                  seed={item.seed}
                  alt={`${chaletName} — صورة ${i + 1}`}
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`معرض صور ${chaletName}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={close}
              aria-label="إغلاق المعرض"
              className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-coconut/10 text-coconut transition-colors hover:bg-coconut/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass sm:left-8 sm:top-8"
            >
              <CloseIcon />
            </button>

            <span dir="ltr" className="absolute right-5 top-7 z-10 font-body text-sm tabular-nums text-coconut/70 sm:right-8">
              {openIndex + 1} / {items.length}
            </span>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="الصورة السابقة"
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-coconut/10 text-coconut transition-colors hover:bg-coconut/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass sm:right-6"
            >
              <ArrowIcon dir="right" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="الصورة التالية"
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-coconut/10 text-coconut transition-colors hover:bg-coconut/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass sm:left-6"
            >
              <ArrowIcon dir="left" />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={openIndex}
                initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
                transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                className="relative mx-auto flex h-[70vh] w-[88vw] items-center justify-center sm:h-[78vh] sm:w-[80vw]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <ChaletMedia
                    src={items[openIndex].src}
                    seed={items[openIndex].seed}
                    alt={`${chaletName} — صورة ${openIndex + 1}`}
                    sizes="80vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
