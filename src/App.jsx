import { useState } from "react";
import useCustomHook from "./Practice/Hooks/useCustomHook";

const App = () => {
  const [input, setInput] = useState("");
  const [val, formateVal] = useCustomHook("shahram 12");

  return (
    <div className="min-h-screen bg-gray-600 p-20 gap-10">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          formateVal(e.target.value);
        }}
        className="border px-4 py-2 outline-none text-white mb-5"
      />
      <hr />
      <h1 className="text-3xl text-white">{val}</h1>
    </div>
  );
};

export default App;
