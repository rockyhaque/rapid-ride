import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomButton from "@/components/custom/button/CustomButton";
import logo from "../../assets/logo/nav-logo.png";


export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 items-center justify-center">
        <img
          src={logo}
          alt="Login illustration"
          className="max-w-md"
        />
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Welcome back
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please sign in to your account
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" autoComplete="email" required placeholder="Email address" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" autoComplete="current-password" required placeholder="Password" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember-me" />
                  <Label htmlFor="remember-me">Remember me</Label>
                </div>
                <div  
 className="text-sm font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">
                  Forgot your password?
                </div>
              </div>
              <CustomButton className="w-full">Sign in </CustomButton>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account? {" "}
                <div className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300 cursor-pointer">
                  Sign up
                </div>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}