import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/common/ErrorPage";
import Login from "@/pages/common/Login";
import Register from "@/pages/common/Register";
import ContactPage from "@/pages/ContactPage"
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
        path: "/contact",
        element: <ContactPage />
      }
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
  
]);
