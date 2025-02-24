import { RiAlignItemLeftLine } from "react-icons/ri";
import MenuItem from "./MenuItem";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem
        icon={RiAlignItemLeftLine}
        label="My Order"
        address="my-orders"
      />
    </>
  );
};

export default CustomerMenu;
