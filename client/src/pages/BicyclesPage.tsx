import { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; 
import BicycleCard from "@/components/custom/cards/BicycleCard";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { Container } from "@/layout/Container";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import { IBicycle } from "@/types/bicycle.type";

const BicyclesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({
    type: "",
    price: "",
    inStock: "",
  });

  // Prepare query parameters for the backend
  const queryParams: Record<string, unknown> = {
    search: searchQuery,
  };

  // Only add filters to queryParams if they have a value
  if (filters.type) queryParams.type = filters.type;
  if (filters.price) queryParams.price = filters.price;
  if (filters.inStock) queryParams.inStock = filters.inStock === "true"; // Convert string to boolean

  // Fetch bicycles with query parameters
  const { data: bicycles, isLoading, refetch } = useGetAllBicyclesQuery(queryParams);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Reset all filters and search
  const handleReset = () => {
    setSearchQuery("");
    setFilters({
      type: "",
      price: "",
      inStock: "",
    });
    refetch(); // Refetch data without filters
  };

  if (isLoading) return <LoadingSpinner />;

  // console.log("Bicycles Data:", bicycles); 

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen px-6 py-24">
      <Container>
        {/* Search Box */}
        <div className="mb-8 flex gap-4">
          <Input
            type="text"
            placeholder="Search bicycles..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 text-white placeholder:text-slate-300"
          />
          <Button onClick={handleReset}>Reset</Button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Select onValueChange={(value) => handleFilterChange("type", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mountain">Mountain</SelectItem>
              <SelectItem value="Road">Road</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="BMX">BMX</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilterChange("price", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-500">$0 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000+">$1000+</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilterChange("inStock", value)}>
            <SelectTrigger>
              <SelectValue placeholder="In Stock" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">In Stock</SelectItem>
              <SelectItem value="false">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bicycle Grid */}
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