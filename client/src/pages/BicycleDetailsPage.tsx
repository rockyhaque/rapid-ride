import CustomButton from "@/components/custom/button/CustomButton";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { Container } from "@/layout/Container";
import { useGetBicycleDetailsQuery } from "@/redux/features/product/bicycleManagementApi";
import { useParams } from "react-router-dom";

const BicycleDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBicycleDetailsQuery(id);

  if (isLoading) return <LoadingSpinner />;

  const bicycle = data?.data;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen p-6 text-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-4 mt-16 bg-gradient-to-r from-orange-600 to-red-100 bg-clip-text text-transparent">
          {bicycle.name}
        </h2>
        <div className="flex justify-center items-center">
          <h1 className="w-28 h-1 bg-gradient-to-l from-slate-700 via-red-100 to-teal-200 rounded-full"></h1>
        </div>
        <div className="max-w-5xl mx-auto bg-slate-800 px-6 md:px-0 py-6 rounded-lg shadow-lg mt-6 border border-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Bicycle Image */}
            <div className="flex justify-center">
              <img
                src={bicycle.image}
                alt={bicycle.name}
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
            {/* Bicycle Details */}
            <div className="space-y-4 mt-6 md:mt-0">
              <p className="text-lg text-gray-300">{bicycle.description}</p>
              <p className="text-lg">
                <span className="font-semibold">Brand:</span> {bicycle.brand}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Type:</span> {bicycle.type}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Price:</span> ${bicycle.price}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Stock:</span>{" "}
                {bicycle.inStock ? "Available" : "Out of Stock"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Quantity:</span>{" "}
                {bicycle.quantity}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <CustomButton className="w-1/5">Buy Now</CustomButton>
        </div>
      </Container>
    </div>
  );
};

export default BicycleDetailsPage;
