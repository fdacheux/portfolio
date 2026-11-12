import Carousel from "./Carrousel";
import { portfolioProjects } from "@/app/data/portfolioData";

function CarrouselSection() {
  return (
    <section
      id="carrousel"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-black mb-2">
          Derniers projets & parcours
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
      </div>
      {/*Carrousel container*/}
      <div>
        <Carousel
          items={portfolioProjects}
          autoPlay={true}
          autoPlayInterval={5000}
          loop={true}
        />
      </div>
    </section>
  );
}

export default CarrouselSection;
