import MenuItem from "./MenuItem";
import { IoCreateOutline  } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={IoCreateOutline }
        label="Create Bicycle"
        address="create-bicycle"
      />
      <MenuItem
        icon={CiCircleList }
        label="All Bicycles"
        address="all-bicycles"
      />
      <MenuItem
        icon={FaUsers }
        label="Manage Users"
        address="manage-users"
      />
    </>
  );
};

export default AdminMenu;
