import { Container } from "@/layout/Container";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetUserByEmailQuery } from "@/redux/features/user/userManagementApi";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  // Fetch user data
  const { data: userData } = useGetUserByEmailQuery(user?.email);
  const profile = userData?.data;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white flex items-center justify-center">
      <Container>
        <div className="pt-16 flex justify-center">
          <div className="relative group w-80">
            {/* Animated Background Blur */}
            <div className="" />
            {/* Main Card */}
            <div className="relative px-7 py-6 bg-black/80 backdrop-blur-xl rounded-xl flex flex-col items-center w-full">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                <img
                  src={profile?.photoURL}
                  className="w-32 h-32 rounded-full object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  alt="Profile"
                />
              </div>
              {/* Profile Info */}
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-violet-500 text-transparent bg-clip-text">
                  {profile?.name || "Unknown User"}
                </h2>
                <p className="text-orange-400 font-medium mt-1">
                  {profile?.role || "User"}
                </p>
                <p className="text-gray-300 mt-2 text-sm">
                  {profile?.email || "No email available"}
                </p>
              </div>
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 flex items-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    profile?.userStatus === "active"
                      ? "bg-green-400"
                      : "bg-red-400"
                  } animate-pulse`}
                />
                <span className="text-xs ml-1.5">
                  {profile?.userStatus?.toUpperCase() || "UNKNOWN"}
                </span>
              </div>
              {/* Connect Button */}
              <div className="relative mt-6 w-full group/btn">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-800 to-red-500 rounded-lg blur opacity-75 group-hover/btn:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center justify-center">
                  <button
                    onClick={handleLogout}
                    className="text-gray-200 group-hover/btn:text-white transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
