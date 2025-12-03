import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 fixed w-full bg-gray-300">
      <div className="logoBox">
        <Link to="/" className="text-2xl font-bold">
          SecureGen
        </Link>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Color-generator">ColorGenerator</NavLink>
          </li>
          <li>
            <NavLink to="/Password-generator">PasswordGenerator</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
