import React, { useRef } from "react";
import ForwardRef2 from "./ForwardRef2";

/*
definition => when we add reference from parent component to child component then this type of reference is called forwardref...
*/

const ForwardRef = () => {
  const inputRef = useRef();
  function updateInput() {
    const inputRefCur = inputRef.current;
    inputRefCur.value = "Muhammad Shahram ❤️";
    inputRefCur.focus();
    inputRefCur.classList.add("text-teal-500");
  }
  return (
    <div className="flex">
      <ForwardRef2 inputRef={inputRef} />
      <button onClick={updateInput} className="cursor-pointer bg-red-900 p-3">
        Update Input
      </button>
    </div>
  );
};

export default ForwardRef;
