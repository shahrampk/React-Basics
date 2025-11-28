import React from "react";

const FrontSide = ({ flip }) => {
  return (
    <div
      className={`absolute right-0 top-0 text-gray-200 bg-linear-to-br from-green-600 via-green-850 to-green-950 w-72 transition-all duration-[2s] perspective-distant rounded-lg p-2 ${
        flip ? " rotate-y-0 " : "rotate-y-180"
      } backface-hidden h-full flex justify-center items-center`}
    >
      <h2 className="text-2xl font-black transition-all duration-300 hover:-rotate-x-20 hover:rotate-y-20 hover:text-shadow-md text-shadow-black">
        Web Developer
      </h2>
    </div>
  );
};

export default FrontSide;
