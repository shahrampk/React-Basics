import React, { useState } from "react";

const CheckBox = () => {
  const [Skills, setSkills] = useState([]);
  const handleSkills = (e) => {
    console.log(Skills);
    if (e.target.checked) setSkills([...Skills, e.target.value]);
    else setSkills([...Skills.filter((skills) => skills !== e.target.value)]);
  };
  return (
    <div className="text-xl flex flex-col gap-5">
      <h1 className="text-3xl my-5">Select your Skills</h1>
      <div className="flex gap-2">
        <input
          value="Php"
          type="checkbox"
          style={{ transform: "scale(2)" }}
          id="Php"
          onChange={handleSkills}
        />
        <label htmlFor="Php">Php</label>
      </div>
      <div className="flex gap-2">
        <input
          value="JavaScript"
          type="checkbox"
          style={{ transform: "scale(2)" }}
          id="JavaScript"
          onChange={handleSkills}
        />
        <label htmlFor="JavaScript">JavaScript</label>
      </div>
      <div className="flex gap-2">
        <input
          value="Python"
          onChange={handleSkills}
          type="checkbox"
          style={{ transform: "scale(2)" }}
          id="Python"
        />
        <label htmlFor="Python">Python</label>
      </div>
      <div className="flex gap-2">
        <input
          value="Java"
          type="checkbox"
          onChange={handleSkills}
          style={{ transform: "scale(2)" }}
          id="Java"
        />
        <label htmlFor="Java">Java</label>
      </div>
      <h1 className="text-3xl my-10">{Skills.toString()}</h1>
    </div>
  );
};

export default CheckBox;
