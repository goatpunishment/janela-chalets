import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

const variants = {
  solid: "bg-bark text-coconut hover:bg-cacao",
  outline: "border border-bark/30 text-bark hover:border-bark hover:bg-bark/5",
  ghost: "text-bark hover:text-brass",
};

export function Button({
  children,
  variant = "solid",
  className,
  href,
  ...rest
}: CommonProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
