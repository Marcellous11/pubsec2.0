import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Differentiators } from "@/components/home/Differentiators";
import { Proof } from "@/components/home/Proof";
import { Vehicles } from "@/components/home/Vehicles";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Partners } from "@/components/home/Partners";
import { Cta } from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Differentiators />
      <Proof />
      <CaseStudy />
      <Vehicles />
      <Partners />
      <Cta />
    </>
  );
}
