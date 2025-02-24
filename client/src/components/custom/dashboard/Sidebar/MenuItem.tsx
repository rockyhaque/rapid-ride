import { NavLink } from "react-router-dom";

interface MenuItemProps {
  label: string;
  address: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform rounded-lg hover:bg-orange-400 hover:text-gray-700  ${
          isActive
            ? "bg-slate-500 text-slate-900 font-semibold"
            : "text-gray-200"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
