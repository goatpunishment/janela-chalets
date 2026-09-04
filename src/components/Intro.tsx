import { Reveal } from "@/components/ui/Reveal";

const descriptors = ["خصوصية تامة", "تفاصيل مدروسة", "لحظات لا تُنسى"];

export function Intro() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="font-body text-xs font-medium tracking-[0.35em] text-brass">JANELA CHALETS</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.15] text-bark sm:text-5xl lg:text-[3.4rem]">
              اكتشف
              <br />
              مكانك القادم
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <p className="text-balance font-body text-lg leading-[1.9] text-bark/80 sm:text-xl">
              في Janela، كل شاليه هو نافذة على قصة مختلفة. مساحات صُممت لتمنحك خصوصية تامة، ولحظات تستحق أن
              تُروى — من مسبح يتوسط الغروب، إلى مجلس يجمع من تحب، إلى هدوء يعيد ضبط إيقاعك. ست وجهات، لكل
              واحدة منها طابعها الخاص، وكلها تشترك في التزام واحد: راحة لا تُجارى.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {descriptors.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-bark/15 px-5 py-2.5 font-body text-sm text-bark/75"
                >
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
