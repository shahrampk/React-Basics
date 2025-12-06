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
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Users</h1>
        <div>
          {users.map((user) => (
            <Link
              key={user.id}
              className="mx-5 text-purple-900"
              to={`/user/${user.id}`}
            >
              {user.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Optional Segments */}
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Optional Segments</h1>
        <div>
          {users.map((user) => (
            <Link
              key={user.id}
              className="m-5 text-purple-900"
              to={`/user/${user.id}/${user.name}`}
            >
              {user.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
