import React from "react";
import useSubjectContext from "./Context";

const Components = () => {
  return <Section1 />;
};

export default Components;

function Section1() {
  return (
    <div className="bg-gray-700 p-10">
      <Section2 />
    </div>
  );
}
function Section2() {
  return (
    <div className="bg-gray-800 p-16">
      <Section3 />
    </div>
  );
}
function Section3() {
  return (
    <div className="bg-gray-900 p-16">
      <Section4 />
    </div>
  );
}
function Section4() {
  const { option } = useSubjectContext();
  return (
    <div className="bg-gray-950 text-white text-2xl p-16">
      <h1>Subject = {option}</h1>
    </div>
  );
}
