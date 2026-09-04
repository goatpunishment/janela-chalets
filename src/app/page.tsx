import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/Intro";
import { ChaletCollection } from "@/components/ChaletCollection";
import { BrandStatement } from "@/components/BrandStatement";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ChaletCollection />
      <BrandStatement />
    </>
  );
}
