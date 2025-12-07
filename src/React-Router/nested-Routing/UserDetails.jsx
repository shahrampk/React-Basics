import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";

const UserDetails = () => {
  const details = useParams();

  return (
    <div className="col-span-3 col-start-2  flex flex-col gap-10">
      <Link to='/users' className="border flex items-center px-2 py-1 transition-colors duration-200 gap-1 cursor-pointer hover:bg-red-500  rounded w-fit">
        <ArrowBigLeft size={20} /> Back
      </Link>
      <div className="justify-center flex-col h-full items-center  gap-10 grid grid-cols-2 ">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile image"
            className="w-96 h-96 bg-red-500 object-cover bg-top rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-semibold">Name</h3>
            <p className="text-gray-600">Shaharam</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">Email.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone Number:</h3>
            <p className="text-gray-600">0122122221</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address:</h3>
            <p className="text-gray-600">0122122221</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
