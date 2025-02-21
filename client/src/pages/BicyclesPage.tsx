import BicycleCard from "@/components/custom/cards/BicycleCard";
import { Container } from "@/layout/Container";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import { IBicycle } from "@/types/bicycle.type";

const BicyclesPage = () => {
  const {
    data: bicycles,
    isLoading,
    error,
  } = useGetAllBicyclesQuery(undefined);

  console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <p className="text-white text-center">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center">Error loading data</p>;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen p-6">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bicycles?.data?.map((bicycle: IBicycle) => (
            <BicycleCard key={bicycle._id} {...bicycle} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BicyclesPage;
