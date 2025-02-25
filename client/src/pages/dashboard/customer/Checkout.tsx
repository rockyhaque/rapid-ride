import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useParams } from "react-router-dom";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { useGetBicycleDetailsQuery } from "@/redux/features/product/bicycleManagementApi";
import { useState } from "react";
import SectionHeading from "@/components/custom/SectionHeading";
import CustomButton from "@/components/custom/button/CustomButton";
import { Badge } from "@/components/ui/badge";

interface FormValues {
  fullName: string;
  address: string;
  email: string;
  phone: string;
  note?: string;
}

const Checkout: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBicycleDetailsQuery(id);

  // Initialize the form unconditionally
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      address: "",
      email: "",
      phone: "",
      note: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  // State for selected quantity
  const [quantity, setQuantity] = useState(1);

  // Calculate total price
  const bicycle = data?.data;
  const totalPrice = bicycle ? bicycle.price * quantity : 0;

  const onSubmit = (values: FormValues) => {
    console.log("Customer Info:", values);
    console.log("Bicycle Details:", bicycle);
    console.log("Selected Quantity:", quantity);
    console.log("Total Price:", totalPrice);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <div className="max-w-7xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <SectionHeading heading="Checkout"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customer Info Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Customer Information
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...register("fullName", { required: "Name is required" })}
                  />
                </FormControl>
                <FormMessage>{errors.fullName?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className="text-white">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                </FormControl>
                <FormMessage>{errors.address?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                  />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className="text-white">Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    {...register("phone", { required: "Phone is required" })}
                  />
                </FormControl>
                <FormMessage>{errors.phone?.message}</FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className="text-white">
                  Order Note (Optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter any additional notes"
                    {...register("note")}
                  />
                </FormControl>
              </FormItem>

              <CustomButton
                type="submit"
                className="w-full "
              >
                Continue to Payment
              </CustomButton>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={bicycle.image}
                  alt={bicycle.name}
                  className="rounded-lg shadow-lg h-40 w-64 object-cover"
                />
              </div>
              <p className="text-lg">
                <span className="font-semibold">Type:</span> <Badge>{bicycle.type}</Badge> 
              </p>
              <p className="text-lg">
                <span className="font-semibold">Price:</span> ${bicycle.price}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Stock:</span>{" "}
                {bicycle.inStock ? "In Stock" : "Out of Stock"}
              </p>
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <p className="text-lg">
                  <span className="font-semibold">Quantity:</span>
                </p>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} // Decrease quantity (minimum 1)
                    className="border hover:bg-rose-700 text-white px-3 py-1 rounded-md"
                  >
                    -
                  </Button>
                  <span className="text-lg">{quantity}</span>
                  <Button
                    onClick={() =>
                      setQuantity((prev) =>
                        Math.min(bicycle.quantity, prev + 1)
                      )
                    } // Increase quantity (maximum available stock)
                    className="border hover:bg-teal-700 text-white px-3 py-1 rounded-md"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Total Price */}
              <p className="text-lg">
                <span className="font-semibold">Total Price:</span> $
                {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Checkout;
