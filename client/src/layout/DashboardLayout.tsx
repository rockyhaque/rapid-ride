import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Sidebar from "@/components/custom/dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 z-50 transform transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-lg shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col bg-gray-900 text-white transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Sidebar Toggle for Small Screens */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`text-2xl md:hidden fixed right-4 top-4 z-50 bg-gray-700 p-2 rounded-full shadow-lg transition-all ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <AiOutlineClose className="text-white" />
        </button>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`text-2xl md:hidden fixed right-4 top-4 z-50 bg-gray-700 p-2 rounded-full shadow-lg transition-all ${
            isSidebarOpen ? "hidden" : "block"
          }`}
        >
          <AiOutlineMenu className="text-white" />
        </button>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
