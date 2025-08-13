import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionKaj from "@/components/SectionKaj";
import SectionGalerija from "@/components/SectionGalerija";
import SectionLokacija from "@/components/SectionLokacija";
import SectionOprema from "@/components/SectionOprema";
import SectionCenik from "@/components/SectionCenik";
import SectionMotivacija from "@/components/SectionMotivacija";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <SectionKaj />
      <SectionGalerija />
      <SectionLokacija />
      <SectionOprema />
      <SectionCenik />
      <SectionMotivacija />
    </main>
  );
}