import {} from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <div className="bg-base-300 flex justify-center sticky bottom-0 pb-2 z-50 ">
      <nav>
        <ul className="menu menu-horizontal lg:menu-horizontal bg-teal-600 text-white rounded-box m-2">
          <li>
            <Link
              to="/beverages"
              className="flex items-center text-sm sm:text-base hover:text-gray-400 transition-colors duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center text-sm sm:text-base hover:text-gray-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/payus"
              className="flex items-center text-sm sm:text-base hover:text-gray-400 transition-colors duration-300"
            >
              Pay Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center text-sm sm:text-base hover:text-gray-400 transition-colors duration-300"
            >
              <FaShoppingCart className="mr-1" />
              <span>Cart Total</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavbar;
