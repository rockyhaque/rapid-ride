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
// import { useParams } from "react-router-dom";

interface FormValues {
  fullName: string;
  address: string;
  email: string;
  phone: string;
  note?: string;
}

const Checkout: React.FC = () => {
    // const { id } = useParams();

    // console.log(id)
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

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Checkout</h2>
        <div>
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
                  {...register("address", { required: "Address is required" })}
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

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Continue to Payment
            </Button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Checkout;
