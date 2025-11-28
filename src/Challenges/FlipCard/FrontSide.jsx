import React from "react";

const FrontSide = ({ URL, flip }) => {
  return (
    <div
      className={` bg-gray-100 text-gray-900 w-72 transition-all duration-[2s] perspective-distant rounded-lg p-2 rotate-x-0 hover:rotate-y-180 backface-hidden  ${
        flip ? "rotate-y-180" : "rotate-y-0"
      }`}
    >
      <div className="relative rounded-lg overflow-hidden">
        <img src={URL} alt="Profile image" className="" />
        <div className="absolute top-0 right-0 h-full w-full bg-black/30"></div>
      </div>
      <div className="px-3 py-4 flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Muhammad Shahram</h1>
        <p className="text-gray-700 text-sm">
          I am a Software developer. Who can crete beautifull websites with
          interactive User interfaces.
        </p>
      </div>
    </div>
  );
};

export default FrontSide;
