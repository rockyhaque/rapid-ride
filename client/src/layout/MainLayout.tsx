import { Footer } from "@/components/custom/Footer";
import { Navbar } from "@/components/custom/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-roboto">
      <div>
        <Navbar />
      </div>
      <div >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
