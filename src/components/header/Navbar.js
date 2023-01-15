import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

// import { NavLink } from "react-router-dom";

const NavbarItem = ({ name }) => {
  return (
    <p className="px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out">
      {name}
    </p>
  );
};

function Navbar() {
  return (
    <div className="p-4 bg-gray-800 sticky flex flex-row gap-3 justify-between items-center text-gray-100 shadow-md">
      <FaApple />
      <div className="flex flex-row gap-5">
        <NavbarItem name="Store" />
        <NavbarItem name="Social" />
        <NavbarItem name="Contact" />
        <NavbarItem name="Help" />
      </div>
      <div className="flex flex-row gap-4">
        <FaSearch />
        <FaShoppingCart />
      </div>

      {/* <NavLink to="/store">Store</NavLink>
      <NavLink to="/social">Social</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/help">Help</NavLink> */}
    </div>
  );
}

export default Navbar;
