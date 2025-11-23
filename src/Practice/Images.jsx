import React from "react";

const WhiteImages = ({ ImageURL, color = "Brown Image" }) => {
  console.log(ImageURL);

  return (
    <div>
      <h1>{color}</h1>
      <img style={{ height: "350px" }} src={ImageURL} alt="My Photo" />
    </div>
  );
};

export default WhiteImages;
