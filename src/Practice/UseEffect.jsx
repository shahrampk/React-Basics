import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("EveryTime on change");
  });
  useEffect(() => {
    console.log("Once on Mount");
  }, []);

  useEffect(() => {
    console.log("On update");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("On Unmout");
    };
  });

  return (
    <div>
      <h1 className="text-4xl font-medium">Components Life Cycle</h1>
      <ul className="my-10 flex flex-col gap-1">
        <li className="text-xl font-semibold">1. Mounted</li>
        <li className="text-xl font-semibold">2. Updating</li>
        <li className="text-xl font-semibold">3. Unmounted</li>
      </ul>

      <div className="grid grid-cols-2 p-5 w-fit bg-gray-900 border border-gray-400/50 rounded-2xl gap-y-10 gap-x-5">
        <h2 className="text-9xl font-medium col-span-2 text-center">{count}</h2>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-gray-800 px-3 py-1.5 rounded-md font-semibold text-cyan-400 cursor-pointer"
        >
          decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-gray-800 px-3 py-1.5 rounded-md font-semibold text-cyan-400 cursor-pointer"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
