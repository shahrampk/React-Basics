import React, { useRef } from "react";

const UseRef = () => {
  const btnRef = useRef(null);
  function showInputField() {
    btnRef.current.classList.toggle("hidden");
    btnRef.current.focus();
  }
  return (
    <div>
      <input
        ref={btnRef}
        type="text"
        className="border-4 border-teal-500 focus:border-teal-800  hidden text-xl p-3 rounded-md text-teal-500"
      />
      <button
        onClick={showInputField}
        className="px-5 block py-3 rounded bg-teal-800 text-gray-200 my-10 cursor-pointer"
      >
        Reveal input field
      </button>
    </div>
  );
};

export default UseRef;
