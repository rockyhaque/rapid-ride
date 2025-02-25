import HighlightCorner from "@/components/custom/HighlightCorner";
import HeroSection from "@/components/custom/HeroSection";
import FeaturedBicycles from "@/components/custom/FeaturedBicycles";
import WhyChooseUs from "@/components/custom/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBicycles />
      <WhyChooseUs />
      <HighlightCorner />
    </div>
  );
};

export default HomePage;
