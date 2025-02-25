import CustomButton from "@/components/custom/button/CustomButton";
import LoadingSpinner from "@/components/custom/shared/LoadingSpinner";
import { useVerifyOrderQuery } from "@/redux/features/product/orderManagementApi";
import { Check } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export default function PaymentConfirmation() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData: OrderData | undefined = data?.data?.[0];

  if (isLoading) return <LoadingSpinner />;
  if (!orderData)
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold">Order Not Found</h1>
          <p>Please check your order ID or contact support.</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="w-full max-w-md bg-transparent shadow-md rounded-lg p-6 border">
        <div className="flex flex-col items-center space-y-2">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-center">
            Payment {orderData.bank_status === "Success" ? "Successful" : "Failed"}!
          </h1>
          <p className="text-gray-300 text-center">
            {orderData.bank_status === "Success"
              ? "Thank you for your purchase. Your payment has been processed successfully."
              : "Your payment was not successful. Please try again or contact support."}
          </p>
        </div>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <h2 className="font-semibold">Order Summary</h2>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">Order number</span>
                <span className="font-medium">{orderData.order_id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="font-medium">{orderData.date_time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total amount</span>
                <span className="font-medium">
                  {orderData.payable_amount} {orderData.currency}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment method</span>
                <span className="font-medium">
                  {orderData.method}{" "}
                  {orderData.card_number
                    ? `ending in ${orderData.card_number.slice(-4)}`
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold">Next Steps</h2>
            <p className="text-sm text-gray-400">
              You will receive an email confirmation with your order details at{" "}
              {orderData.email}.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
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
