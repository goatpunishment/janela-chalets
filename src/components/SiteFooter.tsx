import Image from "next/image";
import Link from "next/link";
import { chalets } from "@/data/chalets";
import { contact, nav, site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/basePath";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M16.6 5.82c-.9-.87-1.47-2.06-1.55-3.42h-3.14v13.5c0 1.63-1.32 2.95-2.95 2.95a2.95 2.95 0 0 1 0-5.9c.3 0 .58.04.85.13V9.9a6.2 6.2 0 0 0-.85-.06 6.15 6.15 0 1 0 6.15 6.15V8.44a8.32 8.32 0 0 0 4.7 1.45V6.75a5.1 5.1 0 0 1-3.21-.93Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-cacao text-coconut">
      <div className="grain-overlay" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <div className="flex flex-col items-start gap-10 border-b border-coconut/10 pb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Image
                src={withBasePath("/logo.png")}
                alt={site.fullName}
                width={745}
                height={526}
                className="h-16 w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:h-20"
              />
              <p className="mt-6 max-w-sm font-accent text-2xl leading-relaxed text-cream sm:text-3xl">
                {site.slogan}
              </p>
            </div>
            <Link
              href="/#chalets"
              className="inline-flex items-center justify-center rounded-full bg-coconut px-8 py-4 text-sm font-medium text-bark transition-colors hover:bg-cream"
            >
              اكتشف الشاليهات
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
          <Reveal delay={0.05}>
            <h3 className="font-display text-lg text-brass">الشاليهات</h3>
            <ul className="mt-5 space-y-3">
              {chalets.map((c) => (
                <li key={c.slug}>
                  <Link href={`/chalets/${c.slug}`} className="text-[15px] text-coconut/75 transition-colors hover:text-coconut">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-lg text-brass">تصفّح</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] text-coconut/75 transition-colors hover:text-coconut">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-lg text-brass">مواقعنا</h3>
            <ul className="mt-5 space-y-3">
              {["مخطط الرياض", "أبحر الشمالية", "الحمدانية", "الحرازات"].map((loc) => (
                <li key={loc} className="flex items-center gap-2 text-[15px] text-coconut/75">
                  <MapPinIcon />
                  {loc}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-lg text-brass">تواصل معنا</h3>
            <ul className="mt-5 space-y-3">
              {contact.tiktok && (
                <li>
                  <a
                    href={contact.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[15px] text-coconut/75 transition-colors hover:text-coconut"
                  >
                    <TikTokIcon />
                    TikTok
                  </a>
                </li>
              )}
              {contact.instagram && (
                <li>
                  <a href={contact.instagram} className="text-[15px] text-coconut/75 hover:text-coconut">
                    Instagram
                  </a>
                </li>
              )}
              {contact.whatsapp && (
                <li>
                  <a href={contact.whatsapp} className="text-[15px] text-coconut/75 hover:text-coconut">
                    واتساب
                  </a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone}`} className="text-[15px] text-coconut/75 hover:text-coconut">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="text-[15px] text-coconut/75 hover:text-coconut">
                    {contact.email}
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact" className="text-[15px] text-coconut/75 transition-colors hover:text-coconut">
                  جميع طرق التواصل
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-coconut/10 pt-8 text-xs text-coconut/50 sm:flex-row sm:justify-between">
          <p>© {year} {site.fullName}. جميع الحقوق محفوظة.</p>
          <p className="font-accent text-sm text-coconut/60">Janela — نافذتك على إجازة مختلفة</p>
        </div>
      </div>
    </footer>
  );
}
