export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatSAR(price: number): string {
  return new Intl.NumberFormat("ar-SA").format(price);
}
