"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/basePath";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500",
        scrolled || open
          ? "bg-coconut/90 shadow-[0_1px_0_0_rgba(74,46,31,0.1)] backdrop-blur-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="relative z-10 flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src={withBasePath("/logo.png")}
            alt={site.fullName}
            width={745}
            height={526}
            priority
            className={cn(
              "w-auto transition-[height,filter] duration-500",
              scrolled || open ? "h-10" : "h-12",
              !scrolled && !open && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            )}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-body text-[15px] font-medium tracking-wide transition-colors",
                scrolled ? "text-bark hover:text-brass" : "text-coconut hover:text-cream"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#chalets"
          className={cn(
            "hidden rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 md:inline-flex",
            scrolled
              ? "bg-bark text-coconut hover:bg-cacao"
              : "bg-coconut/95 text-bark hover:bg-coconut"
          )}
        >
          اطلب إقامتك
        </Link>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={cn("h-[1.5px] w-6 origin-center rounded-full", scrolled || open ? "bg-bark" : "bg-coconut")}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className={cn("h-[1.5px] w-6 rounded-full", scrolled || open ? "bg-bark" : "bg-coconut")}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={cn("h-[1.5px] w-6 origin-center rounded-full", scrolled || open ? "bg-bark" : "bg-coconut")}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-coconut md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 pb-8 pt-2 sm:px-8">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-bark/10 py-4 font-display text-2xl text-bark"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Link
                  href="/#chalets"
                  onClick={() => setOpen(false)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-bark px-6 py-3.5 text-sm font-medium text-coconut"
                >
                  اطلب إقامتك
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
