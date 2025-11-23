import React from "react";

const HeroSection = () => {
  return (
    <div className="h-7/8 flex gap-8 justify-center items-center flex-col">
      <h1 className="animate-slide-bottom text-4xl text-center leading-snug text-teal-500 font-bold">
        Chose beautiful and professional Images <br /> with high resolution
      </h1>
      <div className="flex gap-3 text-lg">
        <button className="text-lg transition-all duration-200 bg-teal-500 hover:bg-teal-600 px-4 py-1 text-gray-900 rounded font-medium cursor-pointer">
          Explore
        </button>
        <button className="secondary-btn">Find</button>
      </div>
    </div>
  );
};

export default HeroSection;
