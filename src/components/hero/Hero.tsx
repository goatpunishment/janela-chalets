"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";
import { Coconut, usePointerParallax } from "@/components/hero/Coconut";

function LeafSilhouette({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 340"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <path
        d="M100 10C40 70 10 150 20 230c6 46 30 84 80 100 8-70 4-140-16-200C74 80 88 40 100 10Z"
        fill="currentColor"
      />
      <path
        d="M100 10c-6 60-2 118 18 172M100 10c14 44 34 82 62 108"
        stroke="rgba(23,16,11,0.25)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const { pointerX, pointerY } = usePointerParallax();

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.45]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-cacao">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 18%, #5c3a26 0%, #3a2417 42%, #1c1109 78%, #120b06 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(38% 32% at 50% 34%, rgba(208,164,110,0.35), transparent 70%)",
          }}
        />
        <div className="grain-overlay" aria-hidden />
      </motion.div>

      <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: scrimOpacity, background: "#0d0805" }} />

      <div className="pointer-events-none absolute -right-10 top-0 h-[60%] w-40 text-bark/25 sm:w-56 md:right-0">
        <LeafSilhouette className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -left-14 bottom-0 h-[55%] w-40 text-bark/20 sm:w-52 md:left-0">
        <LeafSilhouette className="h-full w-full" flip />
      </div>

      <Coconut
        size={40}
        className="pointer-events-none absolute left-[12%] top-[26%] hidden sm:block"
        pointerX={pointerX}
        pointerY={pointerY}
        strength={14}
        floatDuration={8}
        scrollYProgress={scrollYProgress}
        scrollMultiplier={70}
      />
      <Coconut
        size={30}
        className="pointer-events-none absolute right-[16%] bottom-[22%] hidden sm:block"
        pointerX={pointerX}
        pointerY={pointerY}
        strength={-10}
        floatDuration={11}
        rotateRange={16}
        scrollYProgress={scrollYProgress}
        scrollMultiplier={110}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/logo.png"
            alt={site.fullName}
            width={745}
            height={526}
            priority
            className="h-40 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:h-52 md:h-60"
          />
        </motion.div>

        <h1 className="sr-only">
          {site.fullName} — {site.slogan}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
          className="mt-2 font-accent text-3xl text-coconut sm:mt-4 sm:text-4xl md:text-5xl"
        >
          {site.slogan}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-md font-body text-sm leading-relaxed text-coconut/70 sm:text-base"
        >
          تجربة إقامة استثنائية بين الخصوصية والفخامة — ست وجهات، كل واحدة منها نافذتك على عطلة مختلفة.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-coconut/60"
      >
        <span className="text-[11px] tracking-[0.3em]">مرّر للأسفل</span>
        <span className="relative h-10 w-px overflow-hidden bg-coconut/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-coconut"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
