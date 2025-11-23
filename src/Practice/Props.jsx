import { useState } from "react";
import Image from "./Images";

function Props() {
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>shahrampk</h1>
      <button
        style={{ cursor: "pointer", padding: "6px 10px" }}
        onClick={() => setShow(!show)}
      >
        Click me
      </button>
      <ul>
        <li>Invert new trafic lights</li>
        <li>Reheares a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      {show ? (
        <Image ImageURL="https://i.ibb.co/SwR7z5BV/image-brown.png" />
      ) : (
        <Image
          ImageURL="https://i.ibb.co/k2hhSSP7/image-White.png"
          color="White Images"
        />
      )}
    </>
  );
}

export default Props;
