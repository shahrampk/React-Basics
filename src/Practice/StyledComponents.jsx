import React from "react";
import styled from "styled-components";

const Heading = styled.h1({
  color: "#087f5b",
  backgroundColor: "rgb(20, 26, 31)",
  fontSize: "50px",
  fontWeight: "700",
  fontStyle: "italic",
  textTransform: "uppercase",
  padding: "10px 20px",
  borderRadius: "10px",
  textAlign:'center'
});
const StyledComponents = () => {

  return (
    <div>
      <Heading>This is a heading</Heading>
    </div>
  );
};

export default StyledComponents;
