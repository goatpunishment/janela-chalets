import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "عن Janela",
  description:
    "Janela تعني نافذة — نافذتك على إجازة مختلفة. تعرّف على فكرة Janela Chalets والتزامها بالخصوصية والتفاصيل المدروسة.",
};

const values = [
  { title: "خصوصية تامة", body: "كل شاليه مساحة مستقلة بالكامل، بعيدًا عن أعين الآخرين، لتعيشوا لحظاتكم دون قيود." },
  { title: "تفاصيل مدروسة", body: "من المسبح إلى الجلسة الخارجية، كل تفصيلة اختيرت لتخدم راحتكم لا لتزيّن المكان فقط." },
  { title: "لحظات لا تُنسى", body: "نصمم المساحة، وأنتم تصنعون الذكرى — هذا ما نطمح أن تحمله كل إقامة معنا." },
];

const locations = [
  { name: "باتشولي", place: "مخطط الرياض" },
  { name: "الفارس", place: "أبحر الشمالية" },
  { name: "أروما", place: "الحمدانية" },
  { name: "شادو", place: "الحرازات" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-body text-xs font-medium tracking-[0.35em] text-brass">عن Janela</span>
          <h1 className="mt-6 text-balance font-accent text-3xl leading-[1.7] text-bark sm:text-4xl md:text-5xl">
            Janela تعني نافذة. وكل شاليه لدينا هو نافذتك على إجازة مختلفة — بعيدًا عن صخب اليوميات، وقريبًا من
            الراحة التي تستحقها.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-bark/70">
            نؤمن أن العطلة الحقيقية تبدأ من التفاصيل. لهذا اخترنا كل موقع من مواقعنا بعناية — من الرياض إلى
            الساحل — ليمنحكم تجربة مختلفة في كل مرة، وشعورًا واحدًا في كل زيارة: أنكم وصلتم أخيرًا إلى مكانكم.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-bark/10 bg-cream/40 p-8">
                <h3 className="font-display text-2xl text-bark">{v.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-bark/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-8">
        <SectionHeading eyebrow="أينما كنتم" title="مواقعنا" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {locations.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.08}>
              <div className="rounded-2xl border border-bark/10 px-5 py-6 text-center">
                <p className="font-display text-xl text-bark">{l.name}</p>
                <p className="mt-1 font-body text-sm text-bark/55">{l.place}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mt-24 overflow-hidden bg-bark py-24 text-center text-coconut sm:mt-32 sm:py-32">
        <div className="grain-overlay" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">ابدأ رحلتك مع Janela</h2>
            <p className="mt-4 font-body text-coconut/70">تصفّح الشاليهات الست، واختر النافذة التي تناسب لحظتك القادمة.</p>
            <Link
              href="/#chalets"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-coconut px-8 py-4 font-body text-sm font-medium text-bark transition-colors hover:bg-cream"
            >
              تصفّح الشاليهات
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
