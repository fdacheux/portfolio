import Link from "next/link";
import Image from "next/image";
import HeroSection from "./_components/HeroSection/HeroSection";
import CarrouselSection from "./_components/CarrouselSection/CarrouselSection";
export default function Home() {
  return (
    <main className="grow">
      <HeroSection />
      <CarrouselSection />
    </main>
  );
}
