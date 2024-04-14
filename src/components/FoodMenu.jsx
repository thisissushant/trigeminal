import {} from "react";
import { Link } from "react-router-dom";

export const FoodMenu = () => {
  return (
    <>
      <div className="bg-base-300 flex justify-center pt-2 z-50">
        <nav>
          <ul className="menu menu-horizontal lg:menu-horizontal bg-teal-600 text-white rounded-box">
            <li>
              <Link
                to="/beverages"
                className="flex items-center text-sm sm:text-base hover:text-teal-500 transition-colors duration-300"
              >
                Beverages
              </Link>
            </li>
            <li>
              <Link
                to="/starters"
                className="flex items-center text-sm sm:text-base hover:text-gray-400 transition-colors duration-300"
              >
                Starters
              </Link>
            </li>
            <li>
              <Link
                to="/maincourse"
                className="flex items-center text-sm sm:text-base hover:text-gray-400 transition-colors duration-300"
              >
                Main Course
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
