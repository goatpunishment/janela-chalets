"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect } from "react";

// The brief's requested "unexpected little discovery": two small coconuts
// living in the hero atmosphere. They drift on their own, lean gently
// toward the cursor, and roll a little further as the page scrolls —
// tuned to stay a quiet detail, not a mascot.

function CoconutMark({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className="drop-shadow-[0_8px_16px_rgba(23,16,11,0.35)]">
      <defs>
        <radialGradient id="coconutBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#6b4732" />
          <stop offset="55%" stopColor="#432b1d" />
          <stop offset="100%" stopColor="#241408" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="27" fill="url(#coconutBody)" />
      <circle cx="32" cy="32" r="27" fill="none" stroke="#1a0f08" strokeWidth="1" opacity="0.5" />
      <g fill="#1a0f08" opacity="0.85">
        <circle cx="24" cy="24" r="3.4" />
        <circle cx="40" cy="25" r="3.2" />
        <circle cx="32" cy="38" r="3.3" />
      </g>
      <path
        d="M14 20c4-6 10-9 16-9"
        stroke="#8a6146"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function Coconut({
  size,
  className,
  pointerX,
  pointerY,
  strength = 10,
  floatDuration = 9,
  rotateRange = 10,
  scrollYProgress,
  scrollMultiplier = 40,
}: {
  size: number;
  className?: string;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  strength?: number;
  floatDuration?: number;
  rotateRange?: number;
  scrollYProgress: MotionValue<number>;
  scrollMultiplier?: number;
}) {
  const x = useSpring(useTransform(pointerX, (v) => v * strength), { stiffness: 60, damping: 18 });
  const y = useSpring(useTransform(pointerY, (v) => v * strength), { stiffness: 60, damping: 18 });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, scrollMultiplier]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, rotateRange * 3]);

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      aria-hidden
    >
      <motion.div
        style={{ translateY: scrollY, rotate: scrollRotate }}
      >
        <motion.div
          animate={{
            translateY: [0, -14, 0],
            rotate: [-rotateRange / 2, rotateRange / 2, -rotateRange / 2],
          }}
          transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
        >
          <CoconutMark size={size} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function usePointerParallax() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => {
    function handle(e: PointerEvent) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointerX.set(nx);
      pointerY.set(ny);
    }
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [pointerX, pointerY]);

  return { pointerX, pointerY };
}
