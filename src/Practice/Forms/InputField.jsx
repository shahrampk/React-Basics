import React, { useEffect, useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="my-10 flex flex-col gap-5">
      <div className="flex gap-3 bg-gray-700 rounded-lg overflow-hidden w-fit">
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          style={{
            padding: "6px 12px",
            fontSize: "24px",
            outline: "none",
          }}
          placeholder="Enter some thing"
          type="text"
        />
        <button
          onClick={() => setInputValue("")}
          style={{
            padding: "0 12px",
            fontSize: "20px",
            backgroundColor: "red",
            cursor: "pointer",
            color: "white",
            border: "none",
          }}
        >
          Clear
        </button>
      </div>
      <h1 className="text-3xl font-semibold">
        {inputValue.replaceAll(" ", "-")}
        {console.log(inputValue)}
      </h1>
    </div>
  );
};

export default InputField;
