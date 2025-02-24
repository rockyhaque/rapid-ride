import { useState } from "react"; // Import useState
import BicycleCard from "@/components/custom/cards/BicycleCard";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { Container } from "@/layout/Container";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import { IBicycle } from "@/types/bicycle.type";

const BicyclesPage = () => {
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery(undefined);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <LoadingSpinner />;

  // Filter bicycles based on search query
  const filteredBicycles = bicycles?.data?.filter((bicycle: IBicycle) =>
    bicycle.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen px-6 py-24">
      <Container>
        {/* Search Box */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search bicycles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bicycle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {filteredBicycles?.map((bicycle: IBicycle) => (
            <BicycleCard key={bicycle._id} {...bicycle} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BicyclesPage;
