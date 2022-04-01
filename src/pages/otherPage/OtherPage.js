import React from "react";

// =======variant with default styles=====

const style = {
  fontFamily: "Abel",
  fontStyle: "normal",
  fontWeight: "400",
  color: "#112b6b",
  fontSize: "48px",
  lineheight: "60px",
  textAlign: "center",

  margin: "0",
  padding: "0",
};

const otherPage = () => {
  return <h1 style={{ ...style }}>Welcome</h1>;
};

export default otherPage;
