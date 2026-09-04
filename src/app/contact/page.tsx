import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/data/site";
import { chalets } from "@/data/chalets";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "طرق التواصل مع Janela Chalets، ومواقع شاليهاتنا على خرائط Google.",
};

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M16.6 5.82c-.9-.87-1.47-2.06-1.55-3.42h-3.14v13.5c0 1.63-1.32 2.95-2.95 2.95a2.95 2.95 0 0 1 0-5.9c.3 0 .58.04.85.13V9.9a6.2 6.2 0 0 0-.85-.06 6.15 6.15 0 1 0 6.15 6.15V8.44a8.32 8.32 0 0 0 4.7 1.45V6.75a5.1 5.1 0 0 1-3.21-.93Z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.05-1.35A10 10 0 1 0 12 2Zm0 18.2a8.16 8.16 0 0 1-4.17-1.14l-.3-.18-3.1.83.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47a.9.9 0 0 0-.65.3 2.7 2.7 0 0 0-.85 2c0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1L6.6 10.8Z" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

const channels = [
  { key: "tiktok", href: contact.tiktok, label: "TikTok", icon: TikTokIcon, external: true },
  { key: "whatsapp", href: contact.whatsapp, label: "واتساب", icon: WhatsAppIcon, external: true },
  { key: "instagram", href: contact.instagram, label: "Instagram", icon: InstagramIcon, external: true },
  { key: "phone", href: contact.phone ? `tel:${contact.phone}` : undefined, label: contact.phone ?? "اتصال", icon: PhoneIcon, external: false },
  { key: "email", href: contact.email ? `mailto:${contact.email}` : undefined, label: contact.email ?? "البريد الإلكتروني", icon: MailIcon, external: false },
];

const mapLocations = [
  chalets.find((c) => c.slug === "batchouli"),
  chalets.find((c) => c.slug === "al-fares"),
  chalets.find((c) => c.slug === "aroma"),
  chalets.find((c) => c.slug === "shadow-1"),
].filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function ContactPage() {
  const available = channels.filter((c) => c.href);

  return (
    <div className="pt-28 sm:pt-36">
      <section className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-body text-xs font-medium tracking-[0.35em] text-brass">تواصل معنا</span>
          <h1 className="mt-6 font-display text-4xl text-bark sm:text-5xl">نسعد بخدمتكم</h1>
          <p className="mt-5 font-body text-lg leading-relaxed text-bark/70">
            لأي استفسار عن الحجوزات أو التفاصيل، تواصلوا معنا عبر القنوات التالية.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {available.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-bark/10 bg-cream/40 px-6 py-5 transition-colors hover:border-brass/40 hover:bg-cream/70"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bark text-coconut">
                  <c.icon />
                </span>
                <span className="font-body text-base font-medium text-bark">{c.label}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center font-body text-sm text-bark/45">
            نعمل على إضافة قنوات تواصل إضافية قريبًا — تابعونا على TikTok لآخر التحديثات.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <SectionHeading eyebrow="مواقعنا" title="شاليهاتنا على خرائط Google" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {mapLocations.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <div className="rounded-2xl border border-bark/10 p-6">
                <p className="font-display text-xl text-bark">
                  {c.shadow ? "شادو" : c.name} <span className="text-base font-body text-bark/50">— {c.location}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {c.maps.map((m) => (
                    <a
                      key={m.url}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-bark/20 px-4 py-2 text-sm text-bark transition-colors hover:bg-bark hover:text-coconut"
                    >
                      <PinIcon />
                      {m.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-24 sm:h-32" aria-hidden />
    </div>
  );
}
