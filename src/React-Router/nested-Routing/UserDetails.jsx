import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div className="col-span-full flex justify-center flex-col gap-10 h-full items-center">
      <h1 className="text-3xl">
        Users id <ArrowBigRight className="inline" /> {id}{" "}
      </h1>
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
