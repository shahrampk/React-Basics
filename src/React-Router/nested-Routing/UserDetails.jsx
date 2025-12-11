import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";
import useUsersProfile from "../../APIs/useUserProfile";

const UserDetails = () => {
  const username = useParams();
  console.log(username);
  const [userData] = useUsersProfile(username);
  console.log(userData);

  return (
    <div className="col-span-3 col-start-2  flex flex-col gap-10">
      <Link
        to="/users"
        className="border flex items-center px-2 py-1 transition-colors duration-200 gap-1 cursor-pointer hover:bg-red-500  rounded w-fit"
      >
        <ArrowBigLeft size={20} /> Back
      </Link>
      <div className="justify-center flex-col h-full items-center  gap-10 grid grid-cols-2 ">
        <div className="flex justify-center">
          <img
            src={`${userData?.avatar_url}`}
            className="w-96 h-96 bg-red-500 object-cover bg-top rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-semibold">Name</h3>
            <p className="text-gray-600">{userData?.name}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">{userData?.email || "Not Provided"}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <p className="text-gray-600">
              {userData.company || "Not Provided"}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Visit</h3>
            <a href={userData.html_url} target="_blank" className="text-gray-600">{userData.url || 'Not Provided'}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
