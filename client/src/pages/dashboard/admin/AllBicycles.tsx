import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import {
  useDeleteBicycleMutation,
  useGetAllBicyclesQuery,
  useUpdateBicycleMutation,
} from "@/redux/features/product/bicycleManagementApi";
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
import { TiDeleteOutline } from "react-icons/ti";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import CustomButton from "@/components/custom/button/CustomButton";
import { Button } from "@/components/ui/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AllBicycles = () => {
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery(undefined);
  const [updateBicycle] = useUpdateBicycleMutation();
  const [deleteBicycle] = useDeleteBicycleMutation();
  const [selectedBicycle, setSelectedBicycle] = useState<IBicycle | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Initialize react-hook-form
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: selectedBicycle || {}, // Set default values dynamically from selected bicycle
  });

  console.log("Fetched Bicycles:", bicycles);

  if (isLoading) return <LoadingSpinner />;

  const handleUpdateSubmit: SubmitHandler<IBicycle> = async (formData) => {
    if (!selectedBicycle) return;

    try {
      const res = await updateBicycle({
        id: selectedBicycle._id,
        data: formData, // Submit formData directly
      }).unwrap();
      if (res.status) {
        toast.success("Bicycle updated successfully!");
      } else {
        toast.error("Update failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  const handleUpdateClick = (bicycle: IBicycle) => {
    setSelectedBicycle(bicycle);
    setValue("name", bicycle.name);
    setValue("brand", bicycle.brand);
    setValue("price", bicycle.price);
    setValue("quantity", bicycle.quantity);
    setValue("image", bicycle.image);
    setValue("description", bicycle.description);
    setValue("type", bicycle.type);
  };

  // Delete
  const handleDeleteClick = (bicycle: IBicycle) => {
    setSelectedBicycle(bicycle);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedBicycle) return;

    try {
      const res = await deleteBicycle(selectedBicycle._id).unwrap();
      if (res.status) {
        toast.success("Bicycle deleted successfully!");
        setDeleteDialogOpen(false);
      } else {
        toast.error("Delete failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

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
              <TableHead>Delete</TableHead>
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
                {/* update */}
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <MdCreate
                        size={20}
                        className="text-teal-400 hover:text-teal-300 cursor-pointer"
                        onClick={() => handleUpdateClick(bicycle)}
                      />
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 text-white p-6 rounded-xl">
                      <DialogHeader>
                        <DialogTitle>Update Bicycle</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Name</Label>
                          <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                        <div>
                          <Label>Brand</Label>
                          <Controller
                            name="brand"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                        <div>
                          <Label>Price</Label>
                          <Controller
                            name="price"
                            control={control}
                            render={({ field }) => (
                              <Input {...field} type="number" />
                            )}
                          />
                        </div>
                        <div>
                          <Label>Quantity</Label>
                          <Controller
                            name="quantity"
                            control={control}
                            render={({ field }) => (
                              <Input {...field} type="number" />
                            )}
                          />
                        </div>
                        <div>
                          <Label>Image URL</Label>
                          <Controller
                            name="image"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Controller
                            name="description"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </div>
                        <div className="w-full">
                          <Label>Type of</Label>
                          <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[
                                    "Mountain",
                                    "Road",
                                    "Hybrid",
                                    "BMX",
                                    "Electric",
                                  ].map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                        <CustomButton
                          onClick={handleSubmit(handleUpdateSubmit)}
                          className="w-full"
                        >
                          Update
                        </CustomButton>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                {/* Delete */}
                <TableCell>
                  <Dialog
                    open={deleteDialogOpen}
                    onOpenChange={setDeleteDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <TiDeleteOutline
                        size={20}
                        className="text-rose-500 hover:text-rose-700 cursor-pointer"
                        onClick={() => handleDeleteClick(bicycle)}
                      />
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 text-white p-6 rounded-xl">
                      <DialogHeader>
                        <DialogTitle>Confirm Delete</DialogTitle>
                      </DialogHeader>
                      <p>
                        Are you sure you want to delete{" "}
                        <strong>{selectedBicycle?.name}</strong>?
                      </p>
                      <DialogFooter className="flex justify-end space-x-3">
                        <Button onClick={() => setDeleteDialogOpen(false)}>
                          Cancel
                        </Button>
                        <CustomButton onClick={handleDelete}>
                          Delete
                        </CustomButton>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
