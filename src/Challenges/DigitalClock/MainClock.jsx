import React, { useState } from "react";
import ClockDropDown from "./ClockDropDown";
import Clock from "./Clock";

const MainClock = () => {
  const [color, setColor] = useState("#099268");
  return (
    <div>
      <h1 className="text-4xl font-medium text-[#ced4da]">Digital Clock</h1>
      <div className="flex flex-col gap-7 my-10">
        <Clock color={color} />
        <ClockDropDown setColor={setColor} color={color} />
      </div>
    </div>
  );
};

export default MainClock;
