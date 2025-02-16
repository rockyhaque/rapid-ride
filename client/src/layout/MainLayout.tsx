import { Footer } from "@/components/custom/Footer";
import { Navbar } from "@/components/custom/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* outlet */}
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
