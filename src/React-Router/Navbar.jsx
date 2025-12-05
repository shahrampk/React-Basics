import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 fixed w-full text-white bg-black/80 backdrop-blur-sm">
      <div className="logoBox">
        <Link to="/" className="text-2xl font-bold">
          SecureGen
        </Link>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              className="px-4 py-2 hover:bg-blue-500 rounded-md transition-all duration-200"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-4 py-2 hover:bg-blue-500 rounded-md transition-all duration-200"
              to="/Color-generator"
            >
              ColorGenerator
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-4 py-2 hover:bg-blue-500 rounded-md transition-all duration-200"
              to="/Password-generator"
            >
              PasswordGenerator
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
