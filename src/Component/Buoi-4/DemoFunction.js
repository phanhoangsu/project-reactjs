import React from "react";

const DemoFunction = (props) => {
  const { children } = props;
  console.log("children", children);

  return children();
};

export default DemoFunction;
