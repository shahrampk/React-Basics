import React, { useState } from "react";

const DrivedState = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);
  const handleUsers = () => {
    setUsers([...users, value]);
  };
  const totalUser = users.length;
  const lastUser = users.length > 0 ? users[users.length - 1] : " No User";
  const uniqueUsers = [...new Set(users)].length;

  return (
    <div className="text-green-50 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black">
          Total Users : <span className="font-medium"> {totalUser}</span>
        </h2>
        <h2 className="text-3xl font-black">
          Last User :<span className="font-medium">{lastUser}</span>
        </h2>
        <h2 className="text-3xl font-black">
          Total Unique Users :{" "}
          <span className="font-medium">{uniqueUsers}</span>
        </h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUsers();
          setValue("");
        }}
        className=" flex justify-between gap-2 bg-gray-800 p-1 rounded-full"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none px-6 py-3 rounded text-shadow-md text-lg text-shadow-green-600 w-full"
        />
        <button className="bg-green-800 font-bold text-lg cursor-pointer hover:bg-green-700 px-6 rounded-full">
          Click
        </button>
      </form>
      <div className="text-xl">
        {users.map((user, i) => {
          return <p key={i}>{user}</p>;
        })}
      </div>
    </div>
  );
};

export default DrivedState;
