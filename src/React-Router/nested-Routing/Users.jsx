import React, { useId } from "react";
import { Link } from "react-router";

const Users = () => {
  const users = [
    { id: 1, name: "Shahram" },
    { id: 2, name: "Hussain" },
    { id: 3, name: "Abdullah" },
  ];

  return (
    <div className="col-span-full flex justify-center flex-col gap-10 h-full items-center">
      <h1 className="text-3xl font-bold">Users</h1>
      <div>
        {users.map((user) => (
          <Link
            key={user.id}
            className="m-5 text-purple-900"
            to={`/user/${user.id}`}
          >
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
