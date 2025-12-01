import React, { useState } from "react";

const DropDown = () => {
    const [city, setCity] = useState("Lahore");
    
  return (
    <div>
      <h1 className="text-4xl font-medium">Handle DropDowns</h1>
      <select
        className="text-white bg-black my-5 border px-4 py-2 rounded-lg"
        defaultValue={city}
        onChange={(e) => setCity(e.target.value)}
        name="cities"
        id="cities"
      >
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Islamabad">Islamabad</option>
      </select>
      <h2>Selected city: {city}</h2>
    </div>
  );
};

export default DropDown;
