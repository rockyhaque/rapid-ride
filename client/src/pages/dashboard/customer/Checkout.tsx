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
import { useCreateOrderMutation } from "@/redux/features/product/orderManagementApi";
import { toast } from "sonner";

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
  const [createOrder, { isLoading: isSubmitting }] = useCreateOrderMutation();

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
    reset,
  } = methods;
  const [quantity, setQuantity] = useState(1);

  const bicycle = data?.data;
  const totalPrice = bicycle ? bicycle.price * quantity : 0;

  // const onSubmit = async (values: FormValues) => {
  //   const orderData = {
  //     email: values.email,
  //     bicycle: bicycle._id,
  //     quantity,
  //     totalPrice,
  //     address: values.address,
  //     contact: values.phone,
  //     orderNote: values.note,
  //     status: "pending",
  //   };

  //   try {
  //     const response = await createOrder(orderData).unwrap();
  //     if (response?.status) {
  //       toast.success(response?.data?.message);
  //       console.log("Order Created:", response);

  //       // Log the entire response to verify structure
  //       console.log("Full Response:", response);

  //       // Ensure checkout_url is defined
  //       const checkoutUrl = response?.data?.data?.payment?.checkout_url;
  //       console.log("Checkout URL:", checkoutUrl);

  //       if (checkoutUrl) {
  //         // Redirect to the checkout URL
  //         window.location.href = checkoutUrl;
  //       } else {
  //         console.error("Checkout URL is undefined!");
  //         toast.error("Failed to generate checkout URL. Please try again.");
  //       }

  //       reset();
  //     } else {
  //       toast.error(response?.data?.message);
  //       console.error("Order Creation Failed:", response);
  //     }
  //   } catch (error) {
  //     console.error("Order Creation Failed:", error);
  //   }
  // };

  const onSubmit = async (values: FormValues) => {
    const orderData = {
      email: values.email,
      bicycle: bicycle._id,
      quantity,
      totalPrice,
      address: values.address,
      contact: values.phone,
      orderNote: values.note,
      status: "pending",
    };

    try {
      const response = await createOrder(orderData).unwrap();
      if (response?.status) {
        toast.success(response?.message);
        console.log("Order Created:", response);

        // Log the entire response data to verify structure
        console.log("Response Data:", response.data);

        // Correctly access checkout_url
        const checkoutUrl = response?.data?.payment?.checkout_url;
        console.log("Checkout URL:", checkoutUrl);

        if (checkoutUrl) {
          // Redirect to the checkout URL
          window.location.href = checkoutUrl;
        } else {
          console.error("Checkout URL is undefined!");
          toast.error("Failed to generate checkout URL. Please try again.");
        }

        reset();
      } else {
        toast.error(response?.message);
        console.error("Order Creation Failed:", response);
      }
    } catch (error) {
      console.error("Order Creation Failed:", error);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <div className="max-w-7xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <SectionHeading heading="Checkout" />
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

              <CustomButton type="submit" className="w-full">
                {isSubmitting ? "Placing Order..." : "Continue to Payment"}
              </CustomButton>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={bicycle?.image}
                  alt={bicycle?.name}
                  className="rounded-lg shadow-lg h-40 w-64 object-cover"
                />
              </div>
              <p className="text-lg">
                <span className="font-semibold">Type:</span>{" "}
                <Badge>{bicycle?.type}</Badge>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Price:</span> ${bicycle?.price}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Stock:</span>{" "}
                {bicycle?.inStock ? "In Stock" : "Out of Stock"}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <p className="text-lg">
                  <span className="font-semibold">Quantity:</span>
                </p>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="border hover:bg-rose-700 text-white px-3 py-1 rounded-md"
                  >
                    -
                  </Button>
                  <span className="text-lg">{quantity}</span>
                  <Button
                    onClick={() =>
                      setQuantity((prev) =>
                        Math.min(bicycle?.quantity, prev + 1)
                      )
                    }
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
