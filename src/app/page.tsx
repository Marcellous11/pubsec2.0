import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Services } from "@/components/home/Services";
import { Differentiators } from "@/components/home/Differentiators";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Vehicles } from "@/components/home/Vehicles";
import { Partners } from "@/components/home/Partners";
import { Cta } from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof tone="raised" />
      <Services />
      <Differentiators tone="raised" />
      <CaseStudy />
      <Vehicles tone="raised" />
      <Partners />
      <Cta tone="raised" />
    </>
  );
}
