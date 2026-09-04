import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-10 sm:mb-14", className)}>
      <span className="font-body text-xs font-medium tracking-[0.3em] text-brass">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl text-bark sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
