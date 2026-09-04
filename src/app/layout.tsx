import type { Metadata } from "next";
import { El_Messiri, Amiri, IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/data/site";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://janelachalets.sa"),
  title: {
    default: `${site.fullName} — ${site.slogan}`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  openGraph: {
    title: site.fullName,
    description: site.description,
    locale: "ar_SA",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${elMessiri.variable} ${amiri.variable} ${plexArabic.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-coconut text-ink">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
