import { useEffect, useRef, useState } from "react";

const ColorGenerator = () => {
  const [colors, setColors] = useState([]);
  const copiedRef = useRef();
  function getRandomInt(min, max) {
    if (min > max) {
      [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // 0123456789abcdef => #2f9e44
  const colorGenerator = () => {
    let color = "#";
    let str = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      color += str.charAt(getRandomInt(0, 15));
    }
    return color;
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
    <div className="my-10 md:col-start-2 md:col-span-3 w-full px-10 md:p-0 flex flex-col gap-10 items-center">
      <p className="text-5xl xl:text-6xl font-extrabold">
        Color Palette Generator
      </p>
      <div className="grid gap-5 w-full md:px-10 h-full grid-cols-5 flex-wrap justify-center">
        {colors.map((color) => {
          return (
            <div
              key={color}
              data-color={color}
              style={{ backgroundColor: color }}
              onClick={() => {
                window.navigator.clipboard.writeText(color);
              }}
              className="h-56 rounded-xl border border-gray-100/30 cursor-pointer"
            ></div>
          );
        })}
      </div>
      <div className="flex gap-5 flex-wrap">
        <button
          onClick={generateColorArr}
          className="text-lg transition-all duration-200 bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600  px-4 py-2  text-white rounded font-medium cursor-pointer"
        >
          ReGenerate
        </button>
        <div
          className="relative"
          onClick={() => {
            copiedRef.current.classList.remove("invisible");
            setTimeout(() => {
              copiedRef.current.classList.add("invisible");
            }, 500);
          }}
        >
          <p
            ref={copiedRef}
            className=" absolute bottom-full translate-x-5 -translate-y-3 -rotate-z-10 invisible"
          >
            Copied 👍
          </p>
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
    </div>
  );
};

export default ColorGenerator;
