import Image from "next/image";
import { PlaceholderPlate } from "@/components/PlaceholderPlate";
import { cn } from "@/lib/utils";

// Fills its positioned parent with either the real photo (when one exists
// on disk) or the art-directed placeholder plate. One switch point for the
// whole site, so real photography can replace placeholders chalet by
// chalet without touching layout code.

export function ChaletMedia({
  src,
  alt,
  seed,
  className,
  priority,
  sizes = "100vw",
  icon,
}: {
  src: string | null | undefined;
  alt: string;
  seed: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  icon?: "window" | "leaf" | "coconut";
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <div className={cn("absolute inset-0", className)}>
      <PlaceholderPlate seed={seed} label={alt} icon={icon} className="h-full w-full" />
    </div>
  );
}
