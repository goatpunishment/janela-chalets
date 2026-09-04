"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Applies prefers-reduced-motion to every framer-motion component in the
// tree automatically (transforms are skipped, opacity fades remain) —
// one place instead of a useReducedMotion() check in every component.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
