import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { useGetAllBicyclesQuery } from "@/redux/features/product/bicycleManagementApi";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import SectionHeading from "@/components/custom/SectionHeading";
import { IBicycle } from "@/types/bicycle.type";
import { MdCreate } from "react-icons/md";

const AllBicycles = () => {
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery(undefined);

  console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <SectionHeading heading="All Bicycles" />
      {bicycles?.data?.length > 0 ? (
        <Table className="mt-6 bg-white shadow-md rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900  ">
          <TableHeader>
            <TableRow className="bg-gray-900 text-white hover:bg-gray-800">
              <TableHead className="p-4">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Update</TableHead>
              <TableHead>In Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bicycles?.data?.map((bicycle: IBicycle, index: number) => (
              <TableRow
                key={bicycle._id}
                className="border-b hover:bg-gray-700"
              >
                <TableCell className="p-4">{index + 1}</TableCell>
                <TableCell>{bicycle.name}</TableCell>
                <TableCell>{bicycle.type}</TableCell>
                <TableCell>{bicycle.price} $</TableCell>
                <TableCell>{bicycle.quantity}</TableCell>
                <TableCell>
                  <div>
                    <MdCreate
                      size={20}
                      className="text-teal-400 hover:text-teal-300 cursor-pointer"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  {bicycle.inStock ? (
                    <span className="text-teal-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-rose-600 font-medium">No</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-gray-600 mt-4">No bicycles available.</p>
      )}
    </div>
  );
};

export default AllBicycles;
