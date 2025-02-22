import BicycleCard from "@/components/custom/cards/BicycleCard";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { Container } from "@/layout/Container";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import { IBicycle } from "@/types/bicycle.type";

const BicyclesPage = () => {
  const {
    data: bicycles,
    isLoading,

  } = useGetAllBicyclesQuery(undefined);

  console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <LoadingSpinner />;
  

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen p-6">
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

export default BicyclesPage;
