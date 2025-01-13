import React, { useState } from "react";
import Counter from "../Counter.js";

const Page6 = () => {
  const [count, setCount] = useState(0);

  const onCount = () => {
    // setCount(10);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onCount}>Count</button>
      <Counter setCount={setCount} />
    </div>
  );
};

export default Page6;
