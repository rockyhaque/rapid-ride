import SectionHeading from "@/components/custom/SectionHeading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllOrdersQuery } from "@/redux/features/product/orderManagementApi";
import { IOrder } from "@/types/orders.type";

const AllOrders = () => {
  const { data: orders } = useGetAllOrdersQuery(undefined);

  console.log(orders);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <SectionHeading heading="All Orders" />
      {orders?.data?.length > 0 ? (
        <Table className="mt-6 bg-white shadow-md rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900  ">
          <TableHeader>
            <TableRow className="bg-gray-900 text-white hover:bg-gray-800">
              <TableHead className="p-4">#</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.data?.map((order: IOrder, index: number) => (
              <TableRow key={order._id} className="border-b hover:bg-gray-700">
                <TableCell className="p-4">{index + 1}</TableCell>
                <TableCell>{order.bicycle}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.totalPrice} $</TableCell>
                <TableCell>{order.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-gray-600 mt-4">No orders available.</p>
      )}
    </div>
  );
};

export default AllOrders;
