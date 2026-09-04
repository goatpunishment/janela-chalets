// Central brand + contact configuration.
// Only real, provided information is filled in. Every other channel is left
// `undefined` on purpose — components check for a value before rendering a
// link, so adding a real number/handle later is a one-line change here and
// the UI picks it up automatically. Nothing here is a placeholder value.

export const site = {
  name: "Janela",
  fullName: "Janela Chalets",
  slogan: "خذ إجازتك، وخذ راحتك.",
  description:
    "Janela Chalets — شاليهات فاخرة للإيجاز والخصوصية والاسترخاء، بين الرياض وأبحر الشمالية والحمدانية والحرازات.",
  locale: "ar-SA",
} as const;

export const contact = {
  // Provided:
  tiktok: "https://www.tiktok.com/@janela.chalets?_r=1&_t=ZS-97JxeBT1pMD",
  // Not provided yet — left undefined intentionally, do not fabricate.
  whatsapp: undefined as string | undefined,
  instagram: undefined as string | undefined,
  phone: undefined as string | undefined,
  email: undefined as string | undefined,
} as const;

export const nav = [
  { label: "الرئيسية", href: "/" },
  { label: "الشاليهات", href: "/#chalets" },
  { label: "عن Janela", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
] as const;
