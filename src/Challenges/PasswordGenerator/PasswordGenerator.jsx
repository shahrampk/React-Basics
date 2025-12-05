import { Copy } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const copyRef = useRef(null);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(passwordRef.current.textContent);
    passwordRef.current.classList.add("bg-white/20");
    copyRef.current.classList.remove("invisible");
    setTimeout(() => {
      passwordRef.current.classList.remove("bg-white/20");
      copyRef.current.classList.add("invisible");
    }, 500);
  };
  function getRandomInt(min, max) {
    if (min > max) {
      [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generatePassword = useCallback(() => {
    let pass = "";

    let str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    for (let i = 0; i < getRandomInt(8, 16) + 1; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [setPassword]);

  useEffect(() => {
    generatePassword();
  }, []);
  return (
    <div className=" bg-linear-to-br from-sky-400 via-indigo-500 to-purple-600 rounded-2xl col-span-3 col-start-2 h-2/3 shadow-xl shadow-black/30 p-8 flex flex-col items-center justify-between text-white">
      <div className="flex flex-col gap-3 bg-white/20 py-3 px-5 rounded-lg items-center">
        <h1 className="text-6xl font-extrabold">SecureGen</h1>
        <p className="text-lg">Password Generator App</p>
      </div>

      <div className="flex flex-col items-center gap-14 p-4 mb-10 rounded-lg">
        <div className="flex items-center flex-col gap-3">
          <p
            ref={copyRef}
            className="-rotate-z-20 -translate-y-3 text-lg text-shadow-md text-shadow-black/20 invisible transition-all duration-200"
          >
            Copied 👍
          </p>
          <h1
            type="text"
            ref={passwordRef}
            onClick={() => copyPassword()}
            className="password text-5xl cursor-pointer active:bg-white/20"
            title="Click to Copy"
          >
            {password}
          </h1>
        </div>
        <button
          onClick={() => generatePassword()}
          className="bg-white px-4 py-2 w-fit font-semibold rounded-lg text-xl cursor-pointer shadow-xl hover:shadow-2xl text-indigo-700 hover:scale-110 transition-all duration-100 backface-hidden translate-z-0 active:shadow-xl active:scale-100"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
