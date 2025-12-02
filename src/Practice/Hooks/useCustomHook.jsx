import { useState } from "react";

export default function useCustomHook(value) {
  const [val, setVal] = useState("");
  function formateVal(inp) {
    return setVal(inp.replaceAll(" ", "-"));
  }
  return [val, formateVal];
}
