import React, { useState } from "react";
import { SubjectContextProvider } from "./Context";
import Components from "./Components";

const ContextAPI = () => {
  const [option, setOption] = useState("");
  return (
    <SubjectContextProvider value={{ option }}>
      <select
        name="subject"
        id="subject"
        className="text-2xl border outline-none px-4 py-2 mb-5 mr-5"
        onChange={(e) => setOption(e.target.value)}
        value={option}
      >
        <option value="">Select Subject</option>
        <option value="English">English</option>
        <option value="Urdu">Urdu</option>
        <option value="Math">Math</option>
        <option value="Computer">Computer</option>
      </select>
      <button
        className="px-4 py-2 bg-green-600 cursor-pointer text-xl"
        onClick={() => setOption("")}
      >
        Clear
      </button>
      <Components />
    </SubjectContextProvider>
  );
};

export default ContextAPI;
