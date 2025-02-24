import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useDeleteOrderMutation,
  useGetMyOrderQuery,
} from "@/redux/features/product/orderManagementApi";
import { useGetUserByEmailQuery } from "@/redux/features/user/userManagementApi";
import { useAppSelector } from "@/redux/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { IOrder } from "@/types/orders.type";
import { FiDelete } from "react-icons/fi";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const MyOrders = () => {
  const user = useAppSelector(selectCurrentUser);

  // fetch user data
  const { data: userData, isLoading: userLoading } = useGetUserByEmailQuery(
    user?.email
  );
  const email = userData?.data?.email;

  const { data: orders, isLoading: ordersLoading } = useGetMyOrderQuery(email);
  //   console.log(orders);

  const [deleteOrder] = useDeleteOrderMutation();

  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = async () => {
    if (selectedOrder) {
      await deleteOrder(selectedOrder);
      setSelectedOrder(null);
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

      {userLoading || ordersLoading ? (
        <Skeleton className="w-full h-20" />
      ) : orders?.data?.length > 0 ? (
        <Table className="mt-6 shadow-md rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
          <TableHeader>
            <TableRow className="text-white hover:bg-gray-800">
              <TableHead className="p-4">#</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Cancle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.data?.map((order: IOrder, index: number) => (
              <TableRow key={order._id} className="border-b text-white hover:bg-gray-700">
                <TableCell className="p-4">{index + 1}</TableCell>
                <TableCell>{order.bicycle}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.totalPrice} $</TableCell>
                <TableCell>{order.quantity}</TableCell>
                {/* Delete Order */}
                <TableCell>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <FiDelete
                        size={20}
                        className="cursor-pointer text-rose-500 hover:text-rose-700"
                        onClick={() => {
                          setSelectedOrder(order._id);
                          setIsDialogOpen(true);
                        }}
                      />
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 ">
                      <DialogHeader>
                        <DialogTitle className="text-gray-200">
                          Are you absolutely sure?
                        </DialogTitle>
                        <DialogDescription className="text-gray-300">
                          This action cannot be undone. This will permanently
                          delete your order.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="bg-rose-600 hover:bg-rose-700"
                          onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500 text-center">No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;
