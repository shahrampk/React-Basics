import React, { useState } from "react";
import ClockDropDown from "./ClockDropDown";
import Clock from "./Clock";

const MainClock = () => {
  const [color, setColor] = useState("#099268");
  return (
    <div>
      <h2 className="text-4xl text-white font-black transition-all duration-300 hover:-rotate-x-20 hover:rotate-y-20 hover:text-shadow-sm text-shadow-green-500 hover:text-black">
        Current Time
      </h2>
      <div className="flex flex-col gap-7 my-10">
        <Clock color={color} />
        <ClockDropDown setColor={setColor} color={color} />
      </div>
    </div>
  );
};

export default MainClock;
