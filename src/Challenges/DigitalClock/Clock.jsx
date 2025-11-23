import React, { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#141A1F" }}
      className="w-fit text-3xl px-5 py-3 rounded-lg"
    >
      <h1 style={{ color: color }} className="font-semibold font-mono">
        {currentTime}
      </h1>
    </div>
  );
};

export default Clock;
