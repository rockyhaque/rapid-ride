import { Badge } from "@/components/ui/badge";
import CustomButton from "../button/CustomButton";
import { IBicycle } from "@/types/bicycle.type";

const BicycleCard: React.FC<IBicycle> = ({ bicycle }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105">
      <div className="relative h-56 w-full">
        <img
          src={bicycle.image}
          alt={bicycle.name}
          className="object-cover w-full h-full rounded-t-xl"
        />
        <Badge className="absolute top-2 right-2 bg-orange-500">
          {bicycle.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-1">
          {bicycle.name}
        </h3>
        <p className="text-sm text-gray-300 mb-2">{bicycle.brand}</p>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {bicycle.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">${bicycle.price}</span>
          <CustomButton>View Details</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;
