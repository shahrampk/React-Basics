import { Menu } from "lucide-react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import SideBar from "./SideBar";

const Navbar = ({ toggle }) => {
  return (
    <header className="flex justify-between items-center px-10 py-5 fixed w-full text-white bg-black/80 backdrop-blur-sm">
      <div className="logoBox">
        <Link to="/" className="text-2xl font-bold">
          SecureGen
        </Link>
      </div>
      <nav>
        <ul className="lg:flex gap-3 hidden">
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
        <div onClick={toggle} className="lg:hidden cursor-pointer">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
