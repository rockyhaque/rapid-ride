import { Container } from "@/layout/Container";
import SectionHeading from "./SectionHeading";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import LoadingSpinner from "./shared/LoadingSpinner";
import BicycleCard from "./cards/BicycleCard";
import { IBicycle } from "@/types/bicycle.type";
import { Link } from "react-router-dom";
import CustomButton from "./button/CustomButton";

const FeaturedBicycles = () => {
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery({});

  // console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="bg-slate-900 text-white py-10">
      <SectionHeading heading="Featured Bicycles" />

      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {bicycles?.data?.slice(0, 6).map((bicycle: IBicycle) => (
            <BicycleCard key={bicycle._id} {...bicycle} />
          ))}
        </div>
      </Container>

      <div className="flex justify-center items-center my-12">
        <Link to="/bicycles">
          <CustomButton>View More</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBicycles;
