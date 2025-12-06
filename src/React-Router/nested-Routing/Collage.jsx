import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { Students, Departments, Details } from "../index";

const Collage = () => {
  return (
    <div className="col-span-full flex justify-center flex-col gap-10 h-full items-center">
      <h1 className="text-5xl font-bold">Collage Details</h1>
      <ul className="flex text-xl gap-5 text-violet-800">
        <li>
          <Link to="">Students</Link>
        </li>
        <li>
          <Link to="departments">Department</Link>
        </li>
        <li>
          <Link to="details">Details</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Collage;
