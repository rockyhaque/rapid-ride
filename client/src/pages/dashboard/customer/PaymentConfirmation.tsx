import CustomButton from "@/components/custom/button/CustomButton";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="w-full max-w-md bg-transparent shadow-md rounded-lg p-6 border">
        <div className="flex flex-col items-center space-y-2">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-center">
            Payment Successful!
          </h1>
          <p className="text-gray-300 text-center">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>
        </div>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <h2 className="font-semibold">Order Summary</h2>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">Order number</span>
                <span className="font-medium">#ORD-2024-1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="font-medium">February 25, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total amount</span>
                <span className="font-medium">$99.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment method</span>
                <span className="font-medium">Visa ending in 4242</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold">Next Steps</h2>
            <p className="text-sm text-gray-400">
              You will receive an email confirmation with your order details and
              tracking information once your order ships.
            </p>
          </div>
        </div>

        <div className="flex justify-center  gap-2 mt-6">
          <Link to="/dashboard/my-orders">
            <CustomButton className="w-full">View Order</CustomButton>
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto border border-gray-300 text-gray-300 px-4 py-2 rounded-lg text-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
