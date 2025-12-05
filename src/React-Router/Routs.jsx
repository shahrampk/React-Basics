import React from "react";
import { Link, Route, Routes } from "react-router";
import HeroSection from "../Practice/Navbar/HeroSection";
import PasswordGenerator from "../Challenges/PasswordGenerator/PasswordGenerator";
import ColorGenerator from "../Challenges/ColorGenerator/ColorGenerator";
import { Collage, Departments, Details, Page_404, Students } from "./index";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/Color-generator" element={<ColorGenerator />} />
      <Route path="/Password-generator" element={<PasswordGenerator />} />
      <Route path="/collage" element={<Collage />}>
        <Route path="departments" element={<Departments />} />
        <Route path="details" element={<Details />} />
        <Route path="students" element={<Students />} />
      </Route>
      <Route path="/*" element={<Page_404 />} />
    </Routes>
  );
};

export default Routs;
