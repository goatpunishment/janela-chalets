import { contact } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M16.6 5.82c-.9-.87-1.47-2.06-1.55-3.42h-3.14v13.5c0 1.63-1.32 2.95-2.95 2.95a2.95 2.95 0 0 1 0-5.9c.3 0 .58.04.85.13V9.9a6.2 6.2 0 0 0-.85-.06 6.15 6.15 0 1 0 6.15 6.15V8.44a8.32 8.32 0 0 0 4.7 1.45V6.75a5.1 5.1 0 0 1-3.21-.93Z" />
    </svg>
  );
}

export function BookingCTA({ chaletName }: { chaletName: string }) {
  const channels = [
    contact.whatsapp && { href: contact.whatsapp, label: "راسلونا عبر واتساب" },
    contact.phone && { href: `tel:${contact.phone}`, label: contact.phone },
    contact.email && { href: `mailto:${contact.email}`, label: contact.email },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] bg-bark px-6 py-14 text-center text-coconut sm:px-16 sm:py-20">
        <div className="grain-overlay" aria-hidden />
        <p className="relative font-body text-xs font-medium tracking-[0.3em] text-brass">احجز إقامتك</p>
        <h3 className="relative mx-auto mt-5 max-w-lg text-balance font-display text-3xl sm:text-4xl">
          جاهزون لاستقبالكم في {chaletName}
        </h3>
        <p className="relative mx-auto mt-4 max-w-md font-body text-sm text-coconut/70">
          تواصلوا معنا لتأكيد التواريخ والتفاصيل، ونتولى الباقي.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          {channels.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="inline-flex items-center justify-center rounded-full bg-coconut px-7 py-3.5 font-body text-sm font-medium text-bark transition-colors hover:bg-cream"
            >
              {c.label}
            </a>
          ))}
          {contact.tiktok && (
            <a
              href={contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-coconut/25 px-7 py-3.5 font-body text-sm font-medium text-coconut transition-colors hover:bg-coconut/10"
            >
              <TikTokIcon />
              تابعونا على TikTok
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
