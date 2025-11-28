import { useEffect, useState } from "react";
import ToggleBtn from "./ToggleBtn";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

const MainCard = () => {
  // const [theme, setTheme] = useState("dark");
  // useEffect(() => {
  //   document.querySelector("html").classList.add(theme);
  // }, []);
  // function switchTheme() {
  //   theme === "dark" ? setTheme("light") : setTheme("dark");
  // }
  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   html.classList.remove("light", "dark");
  //   html.classList.add(theme);
  // }, [theme]);
  const [flip, setFlip] = useState(false);
  return (
    <div className="flex flex-col gap-2 mt-20">
      {/* <ToggleBtn switchTheme={switchTheme} theme={theme} /> */}
      {/* <ProfileCard theme={theme} /> */}
      <div
        onMouseEnter={() => setFlip(true)}
        onMouseLeave={() => setFlip(false)}
        className="relative h-[430px]"
      >
        <FrontSide
          URL={
            "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          }
          flip={flip}
        />
        <BackSide
          URL={
            "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          }
          flip={flip}
        />
      </div>
    </div>
  );
};

export default MainCard;
