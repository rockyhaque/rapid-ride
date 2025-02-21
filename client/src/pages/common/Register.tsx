import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import CustomButton from "@/components/custom/button/CustomButton"


export default function ModernRegistrationPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-400 to-blue-500 items-center justify-center">
        <image
          src="/placeholder.svg?height=400&width=400"
          width={400}
          height={400}
          alt="Registration illustration"
          className="max-w-md"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white">Create an account</CardTitle>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Join us today and start your journey</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <Input id="name" name="name" type="text" autoComplete="name" required placeholder="Full name" />
                <Input id="email" name="email" type="email" autoComplete="email" required placeholder="Email address" />
                <Input id="password" name="password" type="password" autoComplete="new-password" required placeholder="Password" />
                <Input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required placeholder="Confirm Password" />
              </div>

              <div className="flex items-center">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                  I agree to the <Link to="/"  className="text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">Terms of Service</Link> and <Link to="/"  className="text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300">Privacy Policy</Link>
                </Label>
              </div>

              <CustomButton className="w-full">Sign up
                
              </CustomButton>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account? <Link to="/login" className="text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300 cursor-pointer">Sign in</Link>
              </p>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}