import React, { useState } from "react";

const Radio = () => {
  const [gender, setGender] = useState("male");
  return (
    <div>
      <h1 className="text-4xl font-medium">Handle Radio</h1>
      <div className="flex gap-3 my-5">
        <div>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            className="text-2xl"
            id="male"
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            id="female"
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <h2>
        Selected gender : <span className="capitalize">{gender}</span>
      </h2>
    </div>
  );
};

export default Radio;
