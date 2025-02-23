import MenuItem from "./MenuItem";
import { IoCreateOutline  } from "react-icons/io5";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={IoCreateOutline }
        label="Create Bicycle"
        address="create-bicycle"
      />
    </>
  );
};

export default AdminMenu;
