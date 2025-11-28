import React, { useTransition } from "react";

const UseTransitionHook = () => {
  const [pending, startTrnasition] = useTransition();
  const handleBtn = () => {
    startTrnasition(async () => {
      await new Promise((res) => setTimeout(res, 3000));
    });
  };
  return (
    <div style={{ margin: "50px" }}>
      <button onClick={handleBtn} style={{ margin: "50px" }} disabled={pending}>
        Click
      </button>
      <br />
      {pending && (
        <img
          src="https://i.sstatic.net/kOnzy.gif"
          style={{ height: "100px" }}
          alt="loader"
        />
      )}
    </div>
  );
};

export default UseTransitionHook;
