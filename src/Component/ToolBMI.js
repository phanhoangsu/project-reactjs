// one - way

import React, { useState } from "react";

const ToolBMI = () => {
  const [useName, setUseName] = useState();

  const handleGetUseName = (e) => {
    console.log("text : ", useName);
    setUseName(e.target.value);
  };

  return (
    <div>
      <h1>UseName: {useName}</h1>
      <input onChange={(e) => handleGetUseName(e)} />
    </div>
  );
};

export default ToolBMI;

// two-way
