import { useEffect, useState } from "react";

const ColorGenerator = () => {
  const [colors, setColors] = useState([]);
  const color = () => Math.floor(Math.random() * 255 + 1);
  const colorGenerator = () => {
    // rgba(255, 255, 255, 0.33121)
    return `rgb(${color()}, ${color()}, ${color()})`;
  };

  const generateColorArr = () => {
    setColors([]);
    for (let i = 0; i < 5; i++) {
      const color = colorGenerator();
      setColors((prev) => [...prev, color]);
    }
  };
  useEffect(() => {
    generateColorArr();
  }, []);

  return (
    <div className="my-10 w-full text-white flex flex-col gap-10 items-center">
      <p className="text-5xl xl:text-7xl text-black text-shadow-md text-shadow-green-600 font-black">
        Color Palette Generator
      </p>
      <div className="grid gap-5 w-full px-10 h-full grid-cols-5 flex-wrap justify-center">
        {colors.map((color) => {
          return (
            <div
              key={color}
              data-color={color}
              style={{ backgroundColor: color }}
              onClick={() => {
                window.navigator.clipboard.writeText(color);
              }}
              className="h-full rounded-xl border border-gray-100/30 cursor-pointer group relative"
            >
              <p className="hidden font-black group-active:inline transition-all absolute -top-10 duration-300 -rotate-x-20 rotate-y-20 text-shadow-md text-shadow-black">
                Copied 👍
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={generateColorArr}
        className="text-lg bg-black shadow-md px-4 py-2 rounded shadow-green-600 cursor-pointer hover:scale-110 active:scale-90 transition-all duration-100"
      >
        ReGenerate
      </button>
    </div>
  );
};

export default ColorGenerator;
