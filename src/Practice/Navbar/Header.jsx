import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-500/20 backdrop-blur-md px-5 h-1/8 text-teal-500 flex items-center justify-between">
      <div className="logo font-bold text-2xl">PicVerse</div>
      <nav>
        <ul className="flex gap-5">
          <li className="text-lg transition-all duration-200 hover:bg-teal-500 px-4 py-1 hover:text-gray-900 rounded font-medium cursor-pointer">
            Home
          </li>
          <li className="text-lg transition-all duration-200 hover:bg-teal-500 px-4 py-1 hover:text-gray-900 rounded font-medium cursor-pointer">
            About
          </li>
          <li className="text-lg transition-all duration-200 hover:bg-teal-500 px-4 py-1 hover:text-gray-900 rounded font-medium cursor-pointer">
            Services
          </li>
          <li className="text-lg transition-all duration-200 hover:bg-teal-500 px-4 py-1 hover:text-gray-900 rounded font-medium cursor-pointer">
            Blog
          </li>
          <li className="text-lg transition-all duration-200 bg-teal-500 px-4 py-1 text-gray-900 rounded font-medium cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
