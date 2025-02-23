import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IBicycle } from "@/types/bicycle.type";
import SectionHeading from "@/components/custom/SectionHeading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/components/custom/button/CustomButton";
import { useCreateBicycleMutation } from "@/redux/features/product/bicycleManagementApi";
import { toast } from "sonner";

const CreateBicycle = () => {
  const { register, handleSubmit, control } = useForm<IBicycle>();
  const [createBicycle] = useCreateBicycleMutation();

  const onSubmit: SubmitHandler<IBicycle> = async (data) => {
    // console.log(data);
    const bicycleData = {
      ...data,
      price: Number(data.price),
      quantity: Number(data.quantity),
      inStock: true,
    };

    try {
      const res = await createBicycle(bicycleData).unwrap();
      if (res.status) {
        toast.success(res.message);
      } else {
        toast.error("Something went wrong!");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <SectionHeading heading="Create a Bicycle" />
      <Card className="max-w-lg mx-auto mt-10 p-6 text-gray-200 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input {...register("name")} required />
            </div>
            <div>
              <Label>Brand</Label>
              <Input {...register("brand")} required />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2">
                <Label>Price</Label>
                <Input type="number" {...register("price")} required />
              </div>
              <div className="w-full md:w-1/2">
                <Label>Type of</Label>
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mountain">Mountain</SelectItem>
                        <SelectItem value="Road">Road</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                        <SelectItem value="BMX">BMX</SelectItem>
                        <SelectItem value="Electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            <div>
              <Label>Quantity</Label>
              <Input type="number" {...register("quantity")} required />
            </div>
            <div>
              <Label>Image URL</Label>
              <Input {...register("image")} required />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea {...register("description")} required />
            </div>
            {/* <div className="flex items-center space-x-2">
              <Controller
                name="inStock"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                )}
              />
              <Label>In Stock</Label>
            </div> */}
            <CustomButton type="submit" className="w-full">
              Submit
            </CustomButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBicycle;
