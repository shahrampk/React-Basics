import { Cross, X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const SideBar = ({ toggleSideBar, toggle }) => {
  return (
    <div
      className={`lg:hidden absolute right-0 top-0 p-5 z-50 flex flex-col items-end  bottom-0 h-full bg-gray-800/60 backdrop-blur-lg text-white ${
        toggleSideBar ? "translate-x-full" : ""
      } transition-all duration-300`}
    >
      <div className="cursor-pointer p-3" onClick={toggle}>
        <X />
      </div>
      <ul className=" flex flex-col gap-5 mt-10 items-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-red-500 rounded-md transition-all duration-200 ${
                isActive ? "bg-red-600" : null
              }`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-red-500 rounded-md transition-all duration-200 ${
                isActive ? "bg-red-600" : null
              }`
            }
            to="/Color-generator"
          >
            ColorGenerator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-red-500 rounded-md transition-all duration-200 ${
                isActive ? "bg-red-600" : null
              }`
            }
            to="/Password-generator"
          >
            PasswordGenerator
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-red-500 rounded-md transition-all duration-200 ${
                isActive ? "bg-red-600" : null
              }`
            }
            to="/Apis"
          >
            Form
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-red-500 rounded-md transition-all duration-200 ${
                isActive ? "bg-red-600" : null
              }`
            }
            to="/addUsers"
          >
            Add Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
