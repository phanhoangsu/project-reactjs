// import React, { useContext, useReducer } from "react";
// import { ThemeCtx } from "./ThemeProvider";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { count: state.count + 1 };
//     case "REDUCE":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
// const Bai1 = () => {
//   const themContext = useContext(ThemeCtx);
//   console.log("Bai 1", themContext);
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   console.log("state", state);

//   return (
//     <div>
//       <h2>Counter :{state.count}</h2>
//       <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
//       <button onClick={() => dispatch({ type: "REDUCE" })}>Reduce</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// };

// export default Bai1;

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;
    case "RESET":
      return 0;

    default:
      return state;
  }
};

const Bai1 = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  // console.log("count", count);

  const onIncrease = () => {
    dispatch({ type: "TANG" });
  };
  const onDecrease = () => {
    dispatch({ type: "GIAM" });
  };
  const onReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>Couter: {count}</h1>
      <button onClick={onIncrease}>Tang</button>
      <button onClick={onDecrease}>Giam</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Bai1;
