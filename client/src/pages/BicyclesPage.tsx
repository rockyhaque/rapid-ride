import BicycleCard from "@/components/custom/cards/BicycleCard";
import { Container } from "@/layout/Container";


const BicyclesPage = () => {
  const { data: bicycles, isLoading, error } = useGetBicyclesQuery();

  console.log(data)

  if (isLoading) return <p className="text-white text-center">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center">Error loading data</p>;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen p-6">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bicycles?.map((bicycle) => (
            <BicycleCard key={bicycle._id} bicycle={bicycle} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BicyclesPage;
