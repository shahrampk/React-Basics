import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ToggleBtn from "./ToggleBtn";

const MainCardFile = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.querySelector("html").classList.add(theme);
  }, []);
  function switchTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme]);
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col-reverse gap-2">
        <ProfileCard theme={theme} />
        <ToggleBtn switchTheme={switchTheme} theme={theme} />
      </div>
    </div>
  );
};

export default MainCardFile;
