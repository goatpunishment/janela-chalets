// Structured chalet catalog. The UI (homepage collection, detail pages,
// pricing, maps, reviews) reads entirely from this file — adding or editing
// a chalet means editing data here, not touching component code.
//
// Real photography: drop files into `public/chalets/<slug>/`
// (e.g. `hero.jpg`, `1.jpg`, `2.jpg`, ...). `src/lib/images.ts` auto-detects
// them at build time; until they exist, an art-directed placeholder plate
// renders in their place so the layout is always complete.

export type PriceRow = {
  label: string;
  price: number;
  note?: string;
};

export type MapLink = {
  label: string;
  url: string;
  note?: string;
};

export type Review = {
  rating: number;
  text: string;
  author: string;
  date?: string;
};

export type ShadowVariantId = "shadow-1" | "shadow-2" | "shadow-1-2";

export type Chalet = {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  description: string;
  features: string[];
  pricing: PriceRow[];
  maps: MapLink[];
  reviews: Review[];
  placeholderImageCount: number;
  shadow?: {
    variant: ShadowVariantId;
    tabLabel: string;
    group: { slug: string; label: string }[];
  };
};

const shadowGroup = [
  { slug: "shadow-1", label: "شادو 1" },
  { slug: "shadow-2", label: "شادو 2" },
  { slug: "shadow-1-2", label: "شادو 1 + 2" },
];

const shadowMaps: MapLink[] = [
  {
    label: "الموقع الأول",
    url: "https://maps.google.com/?q=21.534107,39.359921",
  },
  {
    label: "الموقع الثاني",
    url: "https://maps.google.com/?q=21.532557,39.355301",
    note: "يُفتح بعد الوصول إلى الموقع الأول",
  },
];

export const chalets: Chalet[] = [
  {
    slug: "batchouli",
    name: "باتشولي",
    location: "مخطط الرياض",
    tagline: "أكبر مساحاتنا، ولحظات لا تُحصى",
    description:
      "من أكبر شاليهاتنا مساحةً، باتشولي مُصمم لمن يحب أن يجمع الكثير في مكان واحد — مسبح كبير جدًا، سينما خاصة، ملعب كرة طائرة، وجلسات داخلية وخارجية تمنح كل مناسبة طابعها الخاص.",
    features: [
      "من أكبر شاليهاتنا مساحةً",
      "مسبح كبير جدًا",
      "سينما خاصة",
      "ملعب كرة طائرة",
      "جلسات داخلية وخارجية",
      "مناسب للتجمعات الكبيرة والمناسبات",
    ],
    pricing: [
      { label: "الخميس / الجمعة", price: 750 },
      { label: "السبت", price: 700 },
      { label: "منتصف الأسبوع", price: 600 },
    ],
    maps: [
      {
        label: "الموقع الأول",
        url: "https://maps.app.goo.gl/mWyhqM5dU6dYiKGg7?g_st=ipc",
      },
      {
        label: "الموقع الثاني",
        url: "https://maps.app.goo.gl/Rqo4bQdYTs7CojqY8?g_st=ic",
        note: "يُفتح بعد الوصول إلى الموقع الأول",
      },
    ],
    reviews: [],
    placeholderImageCount: 7,
  },
  {
    slug: "al-fares",
    name: "الفارس",
    location: "أبحر الشمالية",
    tagline: "أناقة عصرية على ساحل أبحر",
    description:
      "الفارس يجمع بين الأناقة والهدوء في أبحر الشمالية — من أكثر شاليهاتنا ترتيبًا وجمالًا، بتصميم عصري أنيق، مسبح خاص، مجلس واسع، وجلسة خارجية كبيرة تحرص على كل تفصيلة.",
    features: [
      "تصميم عصري وأنيق",
      "من أكثر الشاليهات ترتيبًا وجمالًا",
      "مسبح خاص",
      "مجلس واسع",
      "جلسة خارجية كبيرة",
    ],
    pricing: [
      { label: "الخميس / الجمعة", price: 750 },
      { label: "السبت", price: 700 },
      { label: "الأحد – الأربعاء", price: 600 },
    ],
    maps: [
      {
        label: "الموقع على خرائط Google",
        url: "https://maps.google.com/?q=21.819242,39.089581",
      },
    ],
    reviews: [],
    placeholderImageCount: 7,
  },
  {
    slug: "aroma",
    name: "أروما",
    location: "الحمدانية",
    tagline: "مساحة عائلية دافئة",
    description:
      "أروما صُمم مع العائلة في البال — مسبح للكبار وآخر للأطفال بألعاب مائية، جلسات داخلية وخارجية، وركن قهوة مميز يجعل كل صباح مناسبة في حد ذاته.",
    features: [
      "مسبح للكبار",
      "مسبح أطفال مع ألعاب مائية",
      "جلسات داخلية وخارجية",
      "ركن قهوة مميز",
      "مناسب للعائلات والأطفال",
    ],
    pricing: [
      { label: "الخميس / الجمعة", price: 650 },
      { label: "السبت", price: 600 },
      { label: "منتصف الأسبوع", price: 500 },
    ],
    maps: [
      {
        label: "الموقع على خرائط Google",
        url: "https://maps.app.goo.gl/if91E9GdmmtNzWkH8?g_st=ic",
      },
    ],
    reviews: [],
    placeholderImageCount: 7,
  },
  {
    slug: "shadow-1",
    name: "شادو 1",
    location: "الحرازات",
    tagline: "للتجمعات الكبيرة، بمساحة مفتوحة",
    description:
      "شادو 1 مساحة مفتوحة لأعداد كبيرة — مسبح خاص وملعب كرة طائرة وجلسة خارجية، ومجلس واسع يتّسع لكل من تحب أن يشاركك يومك.",
    features: [
      "مسبح خاص",
      "ملعب كرة طائرة",
      "جلسة خارجية",
      "مجلس واسع مناسب للأعداد الكبيرة",
    ],
    pricing: [
      { label: "الخميس / الجمعة", price: 600 },
      { label: "السبت", price: 500 },
      { label: "منتصف الأسبوع", price: 350 },
    ],
    maps: shadowMaps,
    reviews: [],
    placeholderImageCount: 6,
    shadow: { variant: "shadow-1", tabLabel: "شادو 1", group: shadowGroup },
  },
  {
    slug: "shadow-2",
    name: "شادو 2",
    location: "الحرازات",
    tagline: "لتجمع هادئ وحميم",
    description:
      "شادو 2 مساحة أهدأ وأكثر خصوصية — مسبح خاص ومجلس مريح، مثالية للتجمعات الصغيرة التي تفضّل الحميمية على الزحام.",
    features: [
      "مسبح خاص",
      "مجلس مريح",
      "مناسب للتجمعات الصغيرة والهادئة",
    ],
    pricing: [
      { label: "الخميس / الجمعة", price: 550 },
      { label: "السبت", price: 450 },
      { label: "منتصف الأسبوع", price: 300 },
    ],
    maps: shadowMaps,
    reviews: [],
    placeholderImageCount: 6,
    shadow: { variant: "shadow-2", tabLabel: "شادو 2", group: shadowGroup },
  },
  {
    slug: "shadow-1-2",
    name: "شادو 1 + 2",
    location: "الحرازات",
    tagline: "المساحتان معًا، لتجربة متكاملة",
    description:
      "احجزوا شادو 1 وشادو 2 معًا واستمتعوا بمساحتين مستقلتين في مكان واحد — مسبحان خاصان، ملعب كرة طائرة، مجلس واسع للأعداد الكبيرة، ومجلس مريح لجلسة أكثر هدوءًا.",
    features: [
      "مسبحان خاصان (شادو 1 وشادو 2)",
      "ملعب كرة طائرة",
      "مجلس واسع مناسب للأعداد الكبيرة",
      "مجلس مريح لتجمع هادئ",
      "مساحة إجمالية تجمع بين الحيوية والخصوصية",
    ],
    pricing: [
      { label: "الخميس / الجمعة", price: 750 },
      { label: "السبت", price: 650 },
      { label: "منتصف الأسبوع", price: 550 },
    ],
    maps: shadowMaps,
    reviews: [],
    placeholderImageCount: 6,
    shadow: { variant: "shadow-1-2", tabLabel: "شادو 1 + 2", group: shadowGroup },
  },
];

export function getChalet(slug: string): Chalet | undefined {
  return chalets.find((c) => c.slug === slug);
}

export function getChaletSlugs(): string[] {
  return chalets.map((c) => c.slug);
}
