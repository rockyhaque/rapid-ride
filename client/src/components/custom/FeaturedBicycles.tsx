import { Container } from "@/layout/Container";
import SectionHeading from "./SectionHeading";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import LoadingSpinner from "./shared/LoadingSpinner";
import BicycleCard from "./cards/BicycleCard";
import { IBicycle } from "@/types/bicycle.type";

const FeaturedBicycles = () => {
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery(undefined);

  console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="bg-slate-900 text-white py-10">
      <SectionHeading heading="Featured Bicycles" />

      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {bicycles?.data?.map((bicycle: IBicycle) => (
            <BicycleCard key={bicycle._id} {...bicycle} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBicycles;
