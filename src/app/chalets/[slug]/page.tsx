import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chalets, getChalet, getChaletSlugs } from "@/data/chalets";
import { getChaletGalleryImages, getChaletHeroImage } from "@/lib/images";
import { site } from "@/data/site";
import { ChaletDetailHero } from "@/components/chalet-detail/ChaletDetailHero";
import { ShadowSelector } from "@/components/chalet-detail/ShadowSelector";
import { FeatureList } from "@/components/chalet-detail/FeatureList";
import { Gallery } from "@/components/chalet-detail/Gallery";
import { PricingTable } from "@/components/chalet-detail/PricingTable";
import { MapCTA } from "@/components/chalet-detail/MapCTA";
import { ReviewsSection } from "@/components/chalet-detail/ReviewsSection";
import { BookingCTA } from "@/components/chalet-detail/BookingCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return getChaletSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chalet = getChalet(slug);
  if (!chalet) return {};
  const heroImage = getChaletHeroImage(slug);
  return {
    title: `${chalet.name} — ${chalet.location}`,
    description: chalet.description,
    alternates: { canonical: `/chalets/${slug}` },
    openGraph: {
      title: `${chalet.name} — ${site.fullName}`,
      description: chalet.description,
      images: heroImage ? [heroImage] : ["/logo.png"],
    },
  };
}

export default async function ChaletPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chalet = getChalet(slug);
  if (!chalet) notFound();

  const heroSrc = getChaletHeroImage(chalet.slug);
  const galleryReal = getChaletGalleryImages(chalet.slug);
  const galleryItems =
    galleryReal.length > 0
      ? galleryReal.map((src, i) => ({ src, seed: `${chalet.slug}-${i}` }))
      : Array.from({ length: chalet.placeholderImageCount }, (_, i) => ({
          src: null,
          seed: `${chalet.slug}-ph-${i}`,
        }));

  const primaryMapsUrl = chalet.maps[0]?.url;

  return (
    <>
      <ChaletDetailHero
        name={chalet.name}
        location={chalet.location}
        tagline={chalet.tagline}
        heroSrc={heroSrc}
        slug={chalet.slug}
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        {chalet.shadow && (
          <Reveal className="mb-14 flex justify-center">
            <ShadowSelector group={chalet.shadow.group} current={chalet.slug} />
          </Reveal>
        )}

        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-balance font-body text-lg leading-[1.9] text-bark/75 sm:text-xl">
            {chalet.description}
          </p>
        </Reveal>

        <section className="mt-20 sm:mt-28">
          <SectionHeading eyebrow="المرافق" title="المرافق والمميزات" />
          <FeatureList features={chalet.features} />
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeading eyebrow="المعرض" title="معرض الصور" />
          <Gallery items={galleryItems} chaletName={chalet.name} />
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeading eyebrow="الأسعار" title="أسعار الإقامة" />
          <PricingTable pricing={chalet.pricing} />
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeading eyebrow="الموقع" title="كيف تصل إلينا" />
          <MapCTA maps={chalet.maps} location={chalet.location} />
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeading eyebrow="آراء ضيوفنا" title="تجارب من أقاموا معنا" />
          <ReviewsSection reviews={chalet.reviews} mapsUrl={primaryMapsUrl} />
        </section>

        <section className="mt-20 sm:mt-28">
          <BookingCTA chaletName={chalet.name} />
        </section>
      </div>

      <OtherChalets currentSlug={chalet.slug} />
    </>
  );
}

function OtherChalets({ currentSlug }: { currentSlug: string }) {
  const others = chalets.filter((c) => c.slug !== currentSlug).slice(0, 3);
  if (others.length === 0) return null;
  return (
    <section className="border-t border-bark/10 bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="تابع الاستكشاف" title="شاليهات أخرى قد تعجبك" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/chalets/${c.slug}`}
              className="group block rounded-2xl border border-bark/10 bg-coconut p-6 transition-colors hover:border-brass/40"
            >
              <span className="font-body text-xs text-bark/50">{c.location}</span>
              <h3 className="mt-2 font-display text-2xl text-bark">{c.name}</h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-brass">
                استكشف
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M12.5 5 6.5 10l6 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
