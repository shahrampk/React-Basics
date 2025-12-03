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
    <div className="my-10 col-start-2 col-span-3 text-white flex flex-col gap-10 items-center">
      <p className="text-5xl xl:text-7xl text-black font-extrabold">
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
              className="h-56 rounded-xl border border-gray-100/30 cursor-pointer group relative"
            >
              <p className="hidden font-black group-active:inline transition-all absolute -top-10 duration-300 -rotate-x-20 rotate-y-20 text-shadow-md text-shadow-black">
                Copied 👍
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5">
        <button
          onClick={generateColorArr}
          className="text-lg transition-all duration-200 bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600  px-4 py-2  text-white rounded font-medium cursor-pointer"
        >
          ReGenerate
        </button>
        <button
          onClick={() => {
            window.navigator.clipboard.writeText(colors);

          }}
          className="text-lg transition-all duration-200 bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600  px-4 py-2  text-white rounded font-medium cursor-pointer"
        >
          Copy Palette
        </button>
      </div>
    </div>
  );
};

export default ColorGenerator;
