import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="h-7/8 flex gap-8 justify-center items-center flex-col col-start-2 col-span-3">
      <h1 className="animate-slide-bottom text-7xl text-center leading font-bold">
       Let's create something <br /> with React
      </h1>
      <div className="flex gap-3 text-lg">
        <Link
          to="Color-generator"
          className="text-lg transition-all duration-200 bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600  px-4 py-2  text-white rounded font-medium cursor-pointer"
        >
          ColorGenerator
        </Link>
        <Link
          to="Password-generator"
          className="text-lg transition-all duration-200 bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600  px-4 py-2  text-white rounded font-medium cursor-pointer"
        >
          PasswordGenerator
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
