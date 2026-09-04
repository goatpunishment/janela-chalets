import { chalets } from "@/data/chalets";
import { getChaletHeroImage } from "@/lib/images";
import { ChaletRow } from "@/components/ChaletRow";
import { Reveal } from "@/components/ui/Reveal";

export function ChaletCollection() {
  return (
    <section id="chalets" className="relative bg-coconut py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-bark/10 pb-14 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl text-bark sm:text-5xl">مجموعة الشاليهات</h2>
            <p className="max-w-sm font-body text-bark/60">
              ست وجهات مستقلة، من الرياض إلى الساحل — تصفّح كل واحدة واختر ما يناسب لحظتك.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-bark/10">
          {chalets.map((chalet, i) => (
            <ChaletRow
              key={chalet.slug}
              chalet={chalet}
              index={i}
              heroSrc={getChaletHeroImage(chalet.slug)}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
