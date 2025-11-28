import React from "react";

const DataTable = ({ users }) => {
  return (
    <table className="form bg-red-700 w-full rounded-lg overflow-hidden shadow-2xl h-[500px] shadow-black border-collapse">
      <thead className="backdrop-blur-md bg-black/20">
        <tr className=" grid grid-cols-4 justify-between w-full font-black text-center divide divide-gray-600">
          <td className="p-5 border border-gray-900/30 ">Id</td>
          <td className="p-5 border border-gray-900/30 ">Name</td>
          <td className="p-5 border border-gray-900/30 ">Email</td>
          <td className="p-5 border border-gray-900/30 ">Password</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr
              key={user.id}
              className=" grid grid-cols-4 justify-between w-full text-center divide-black"
            >
              <td className="p-5 border border-gray-900/30 ">{user.id}</td>
              <td className="p-5 border border-gray-900/30 ">{user.name}</td>
              <td className="p-5 border border-gray-900/30 ">{user.email}</td>
              <td className="p-5 border border-gray-900/30 ">
                {user.password}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
