import React from "react";
import TableRow from "./TableRow";

const RenderingData = () => {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      role: "Admin",
      isActive: true,
      joinedDate: "2023-01-15",
      avatar: "https://example.com/avatars/alice.jpg",
      country: "USA",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@gmail.com",
      age: 34,
      role: "User",
      isActive: true,
      joinedDate: "2023-06-22",
      avatar: "https://example.com/avatars/bob.jpg",
      country: "Canada",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@outlook.com",
      age: 25,
      role: "Moderator",
      isActive: false,
      joinedDate: "2024-02-10",
      avatar: null,
      country: "UK",
    },
    {
      id: 4,
      name: "Rahul Kumar",
      email: "rahul.kumar@yahoo.com",
      age: 31,
      role: "User",
      isActive: true,
      joinedDate: "2023-11-05",
      avatar: "https://example.com/avatars/rahul.jpg",
      country: "India",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      email: "sophia.martinez@hotmail.com",
      age: 29,
      role: "User",
      isActive: true,
      joinedDate: "2024-08-19",
      avatar: "https://example.com/avatars/sophia.jpg",
      country: "Spain",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-medium">Looping on Jsx using map</h1>
      <table className="w-full border-collapse bg-gray-900 text-sm text-gray-300 mt-10 text-center">
        <thead className="bg-gray-800/80 backdrop-blur-xs">
          <tr>
            <th className="px-6 py-4 font-semibold text-xl text-white">Id</th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Name
            </th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Email
            </th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Age
            </th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Role
            </th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Active
            </th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Joined Date
            </th>
            <th className="px-6 py-4 font-semibold border-l border-gray-700 text-xl text-white">
              Country
            </th>
          </tr>
        </thead>

        <tbody className="divide divide-gray00">
          {users.map((user) => (
            <TableRow user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderingData;
