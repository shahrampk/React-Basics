import React from "react";
import { Link, Route, Routes } from "react-router";
import HeroSection from "../Practice/Navbar/HeroSection";
import PasswordGenerator from "../Challenges/PasswordGenerator/PasswordGenerator";
import ColorGenerator from "../Challenges/ColorGenerator/ColorGenerator";
import {
  Collage,
  Departments,
  Details,
  Page_404,
  Students,
  UserDetails,
} from "./index";
import InputForm from "../Challenges/Data_Managment/InputForm";
import DataTable from "../Challenges/Data_Managment/DataTable";
import useJsonApi from "../APIs/useJsonApi";

const Routs = () => {
  const [usersData] = useJsonApi();
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/Color-generator" element={<ColorGenerator />} />
      <Route path="/Password-generator" element={<PasswordGenerator />} />
      <Route path="/Apis" element={<InputForm />} />
      <Route path="/addUsers" element={<DataTable users={usersData} />} />
      <Route path="/user/:id/:name?" element={<UserDetails />} />
      <Route path="/collage" element={<Collage />}>
        <Route path="" element={<Students />} />
        <Route path="departments" element={<Departments />} />
        <Route path="details" element={<Details />} />
      </Route>
      <Route path="/*" element={<Page_404 />} />
    </Routes>
  );
};

export default Routs;
