import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "@/components/custom/button/CustomButton";
import registerimg from "../../assets/img/register.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  photoURL: string;
}

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [signUpUser] = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      photoURL: data.photoURL,
    };
    try {
      const res = await signUpUser(userInfo).unwrap();
      if (res.status) {
        toast.success("User Created Successfully");
        navigate("/login");
      } else {
        toast.error("User creation failed");
      }
    } catch {
      toast.error("An error occurred while signing up");
    }
  };

  return (
    <div className="flex min-h-screen flex-row-reverse">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 items-center justify-center">
        <img
          src={registerimg}
          alt="Login illustration"
          className="max-w-md rounded-2xl"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Create an account
            </CardTitle>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Join us today and start your journey
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: "Full name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                <Input
                  id="password"
                  type="text"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                <Input
                  id="photoURL"
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                />
              </div>

              <div className="flex items-center">
                <Checkbox id="terms" required />
                <Label
                  htmlFor="terms"
                  className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                >
                  I agree to the{" "}
                  <Link
                    to="/"
                    className="text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/"
                    className="text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <CustomButton type="submit" className="w-full">
                Sign up
              </CustomButton>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300 cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
