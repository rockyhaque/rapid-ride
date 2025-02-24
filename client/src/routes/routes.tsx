import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import AboutPage from "@/pages/AboutPage";
import BicycleDetailsPage from "@/pages/BicycleDetailsPage";
import BicyclesPage from "@/pages/BicyclesPage";
import ErrorPage from "@/pages/common/ErrorPage";
import Login from "@/pages/common/Login";
import Register from "@/pages/common/Register";
import ContactPage from "@/pages/ContactPage";
import AllBicycles from "@/pages/dashboard/admin/AllBicycles";
import AllOrders from "@/pages/dashboard/admin/AllOrders";
import CreateBicycle from "@/pages/dashboard/admin/CreateBicycle";
import ManageUsers from "@/pages/dashboard/admin/ManageUsers";
import Checkout from "@/pages/dashboard/customer/Checkout";
import MyOrders from "@/pages/dashboard/customer/MyOrders";
import MyProfile from "@/pages/dashboard/MyProfile";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/bicycles",
        element: <BicyclesPage />,
      },
      {
        path: "/bicycles/:id",
        element: <BicycleDetailsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
    ],
  },
  // Auth Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // Dashboard Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MyProfile />,
      },
      // admin routes
      {
        path: "create-bicycle",
        element: <CreateBicycle />,
      },
      {
        path: "all-bicycles",
        element: <AllBicycles />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "all-orders",
        element: <AllOrders />,
      },
      // Cutomer routes
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "checkout",
        element: <Checkout />
      }
    ],
  },
]);
