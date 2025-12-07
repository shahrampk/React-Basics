import React, { useEffect, useId, useState } from "react";
import { Link } from "react-router";
import fetchData from "../../APIs/useUsersData";
import useUsersProfile from "../../APIs/useUserProfile";

const Users = () => {
  const [users] = fetchData();
  console.log(users);

  const fetchUserProfile = (name) => {
    useUsersProfile(name);
  };

  return (
    <div className="col-span-full flex justify-center flex-col gap-10 h-full items-center">
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Users</h1>
        <div>
          {users.length > 0 ? (
            users.map((user) => (
              <Link
                key={user.id}
                onClick={() => fetchUserProfile(user.name)}
                className="mx-5 text-purple-900 inline-block"
                to={`/user/${user.id}`}
              >
                {user.login}
              </Link>
            ))
          ) : (
            <p className="text-center">
              SomeThing went wrong, <br /> Please Try latter
            </p>
          )}
        </div>
      </div>
      {/* Optional Segments */}
      {/* 
      
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Optional Segments</h1>
        <div>
          {users &&
            users.map((user) => (
              <Link
                onClick={fetchUserProfile}
                key={user.id}
                className="mx-5 text-purple-900 inline-block"
                to={`/user/${user.id}/${user.name}`}
              >
                {user.login}
              </Link>
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default Users;
