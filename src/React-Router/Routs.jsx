import React from "react";
import { Route, Routes } from "react-router";
import HeroSection from "../Practice/Navbar/HeroSection";
import PasswordGenerator from "../Challenges/PasswordGenerator/PasswordGenerator";
import ColorGenerator from "../Challenges/ColorGenerator/ColorGenerator";
import { Collage, Departments, Details, Students } from "./index";

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
      <Route
        path="/*"
        element={
          <div className="col-span-full flex justify-center text-4xl">
            <img
              src="https://support.heberjahiz.com/hc/article_attachments/21013076295570"
              alt="404 Page Not Found"
              className="h-96"
            />
          </div>
        }
      />
    </Routes>
  );
};

export default Routs;
