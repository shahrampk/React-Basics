import React, { useState } from "react";

const ClockDropDown = ({ setColor, color }) => {
  return (
    <div>
      <select
        name="colors"
        id="colors"
        className="text-xl text-white bg-black px-5 py-2 rounded-md border"
        defaultValue={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="#099268">Teal</option>
        <option value="#ACFFFF">Cyan</option>
        <option value="red">Red</option>
        <option value="#fd7e14">Orange</option>
        <option value="purple">Purple</option>
        <option value="#d6336c">Pink</option>
      </select>
    </div>
  );
};

export default ClockDropDown;
