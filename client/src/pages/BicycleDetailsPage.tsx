import { useGetBicycleDetailsQuery } from "@/redux/features/product/bicycleManagementApi";
import { useParams } from "react-router-dom";

const BicycleDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBicycleDetailsQuery(id);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Bicycle Details</h2>
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <img src={data.imageUrl} alt={data.name} />
          <p>Price: ${data.price}</p>
        </div>
      )}
    </div>
  );
};

export default BicycleDetailsPage;
