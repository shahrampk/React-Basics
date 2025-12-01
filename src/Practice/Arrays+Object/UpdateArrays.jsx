import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const UpdateArrays = () => {
  const [boys, setBoys] = useState(["Shahram", "Hussain", "Abdullah"]);
  const [users, setUsers] = useState([
    {
      name: "Shahram",
      age: 18,
      parents: { father: "Mustafa", Mother: "Saira" },
    },
    {
      name: "Hussain",
      age: 17,
      parents: { father: "Mustafa", Mother: "Saira" },
    },
    {
      name: "Abdullah",
      age: 14,
      parents: { father: "Mustafa", Mother: "Saira" },
    },
  ]);

  function handleBoys(e) {
    boys[boys.length - 1] = e.target.value;
    setBoys([...boys]);
  }

  function handleInput(e) {
    users[users.length - 1].name = e.target.value;
    setUsers([...users]);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl py-10">How to Update Array in React</h1>
      {users.map((user, i) => {
        return (
          <h1 key={i} className="text-3xl my-2">
            {user.name}
          </h1>
        );
      })}
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        className="border px-4 py-2 text-2xl my-10"
      />
    </div>
  );
};

export default UpdateArrays;
