import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetUserByEmailQuery } from "@/redux/features/user/userManagementApi";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa6";
import logo from "../../../../assets/logo/logo-with-title.png";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // fetch user data
  const { data: userData } = useGetUserByEmailQuery(user?.email);
  return (
    <div className="w-64 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900  p-3 shadow-lg pt-10 flex flex-col justify-between  ">
      <div>
        <div className="flex justify-center items-center space-x-4 p-2 mb-5">
          <Link to="/" className="flex justify-center items-center gap-3">
            <img className="w-auto h-12 md:h-16 " src={logo} alt="logo" />
          </Link>
        </div>

        <div className="font-nunitoSans">
          <div className="relative cursor-pointer ">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500 rounded-lg " />
            <div className="relative p-1 bg-slate-600 dark:bg-gray-800 border-2 border-orange-500 rounded-lg hover:scale-105 transition duration-500">
              <div className="flex items-center">
                <div className="flex items-center space-x-4 p-2">
                  <img
                    className="h-12 rounded-full"
                    src={userData?.data?.photoURL}
                    referrerPolicy="no-referrer"
                    alt="User Profile"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-200  ">
                      {userData?.data?.name}
                    </h4>
                    <span className="text-sm flex items-center space-x-1">
                      <FaUserShield className="text-gray-300" />
                      <span className="text-gray-300 pl-1">
                        {userData?.data?.role.charAt(0).toUpperCase() +
                          userData?.data?.role.slice(1).toLowerCase()}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          {/* <MenuItem label="Statistics" address="/dashboard" icon={BsGraphUp} /> */}

          {userData?.data?.role === "admin" && <AdminMenu />}
          {userData?.data?.role === "customer" && <CustomerMenu />}
        </ul>
      </div>

      {/* Logout button */}
      <div className="flex justify-evenly items-center my-12 text-gray-300 gap-4">
        <Button
          onClick={handleLogout}
          className="relative overflow-hidden px-6 py-6 rounded-lg font-semibold text-white shadow-md transition-all duration-300 bg-gradient-to-r from-red-500 to-rose-500 hover:scale-105 hover:shadow-rose-500/50 hover:shadow-lg text-lg"
        >
          <div className="relative flex items-center space-x-2">
            <LogOut className="h-5 w-5 text-white transition-transform duration-300 hidden md:block" />
            <span className="pr-2 md:pr-0">Logout</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
