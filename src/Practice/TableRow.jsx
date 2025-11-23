import React from "react";

const TableRow = ({user}) => {
  return (
    <tr key={user.id} className="hover:bg-gray-800/60 transition duration-200">
      <td className="border border-gray-700 px-6 py-4 text-gray-200">
        {user.id}
      </td>
      <td className="border border-gray-700 px-6 py-4 font-medium text-white">
        {user.name}
      </td>
      <td className="border border-gray-700 px-6 py-4 text-gray-400">
        {user.email}
      </td>
      <td className="border border-gray-700 px-6 py-4">{user.age}</td>
      <td className="border border-gray-700 px-6 py-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold 
              ${
                user.role === "Admin"
                  ? "bg-purple-900/60 text-purple-300 border border-purple-700"
                  : user.role === "Moderator"
                  ? "bg-blue-900/60 text-blue-300 border border-blue-700"
                  : "bg-gray-700/80 text-gray-300 border border-gray-600"
              }`}
        >
          {user.role}
        </span>
      </td>
      <td className="border border-gray-700 px-6 py-4">
        {user.isActive ? (
          <span className="text-green-400 font-medium">● Online</span>
        ) : (
          <span className="text-gray-600">● Offline</span>
        )}
      </td>
      <td className="border border-gray-700 px-6 py-4 text-gray-400">
        {user.joinedDate}
      </td>
      <td className="border border-gray-700 px-6 py-4 text-gray-300">
        <span className="flex items-center justify-center gap-2">
          {user.country}
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
