import { useState } from "react";
import Navbar from "./React-Router/Navbar";
import Routs from "./React-Router/Routs";
import SideBar from "./React-Router/SideBar";

const App = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  function toggle() {
    setToggleSideBar(!toggleSideBar);
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <SideBar toggleSideBar={toggleSideBar} toggle={toggle} />
      <div className="min-h-screen flex justify-center items-center text-white bg-gray-900">
        <Routs />
      </div>
    </>
  );
};

export default App;
