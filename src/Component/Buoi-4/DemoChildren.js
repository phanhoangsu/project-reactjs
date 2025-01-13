// import React from "react";

// const DemoChildren = (props) => {
//   // console.log("props", props);

//   const { children } = props;
//   return <div>{children}</div>;
// };

// export default DemoChildren;

import React from "react";

const DemoChildren = (props) => {
  // const { children } = props;
  console.log("props", props);

  return <div>{props.children}</div>;
};

export default DemoChildren;
