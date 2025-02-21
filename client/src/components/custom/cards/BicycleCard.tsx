import { Badge } from "@/components/ui/badge";
import CustomButton from "../button/CustomButton";
import { IBicycle } from "@/types/bicycle.type";
import { Link } from "react-router-dom";

const BicycleCard: React.FC<IBicycle> = ({
  _id,
  name,
  image,
  type,
  brand,
  description,
  price,
}) => {
  console.log(_id);
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl shadow-lg overflow-hidden transition-all ">
      <div className="relative h-56 w-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-t-xl"
        />
        <Badge className="absolute top-2 right-2 bg-orange-500">{type}</Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-2">{brand}</p>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">${price}</span>
          <Link to={`${_id}`}>
            <CustomButton>View Details</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;
