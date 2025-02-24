import HighlightCorner from "@/components/custom/HighlightCorner";
import HeroSection from "@/components/custom/HeroSection";
import FeaturedBicycles from "@/components/custom/FeaturedBicycles";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBicycles />
      <HighlightCorner />
    </div>
  );
};

export default HomePage;
