import React from "react";
import { Route, Routes } from "react-router";
import HeroSection from "../Practice/Navbar/HeroSection";
import PasswordGenerator from "../Challenges/PasswordGenerator/PasswordGenerator";
import ColorGenerator from "../Challenges/ColorGenerator/ColorGenerator";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/Color-generator" element={<ColorGenerator />} />
      <Route path="/Password-generator" element={<PasswordGenerator />} />
    </Routes>
  );
};

export default Routs;
