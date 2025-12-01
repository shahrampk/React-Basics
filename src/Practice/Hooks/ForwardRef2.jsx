import React, { useRef } from "react";

const ForwardRef2 = ({ inputRef }) => {
  return (
    <div>
      <input className="border p-3 mr-3" type="text" ref={inputRef} />
    </div>
  );
};

export default ForwardRef2;
