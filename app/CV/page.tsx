import BentoGrid from "./_components/BentoGrid";
import HeroSection from "./_components/HeroSection";
import JobFilters from "./_components/JobFilters";

function page() {
  return (
    <div>
      <HeroSection />
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <JobFilters />
        <BentoGrid />
      </main>
    </div>
  );
}

export default page;
