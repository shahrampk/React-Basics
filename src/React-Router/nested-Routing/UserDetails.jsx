import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";

const UserDetails = () => {
  const details = useParams();

  return (
    <div className="col-span-full flex justify-center flex-col gap-10 h-full items-center">
      <div>
        <h1 className="text-3xl">
          Users id <ArrowBigRight className="inline" /> {details.id}
        </h1>
        {details.name ? <p>User name is {details.name}</p> : null}
      </div>
      <Link
        to="/users"
        className="flex px-4 py-2 items-center gap-2 rounded-lg border"
      >
        <ArrowBigLeft size={15} /> <span className="text-xl">Back</span>
      </Link>
    </div>
  );
};

export default UserDetails;
