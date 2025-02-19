// VÍ DỤ  LƯU TỪ 1 STATE

// import React, { useReducer, useState } from "react";

// const Baimoi1 = () => {
//   // const [number, setNumber] = useState(0);
//   const [state, dispatch] = useReducer((state, action) => {
//     console.log("action", action);

//     return action % 2 !== 0 ? false : true;
//   }, 0);

//   const onClickChangeNumber = () => {
//     dispatch(302);
//   };
//   console.log("state", state);

//   return (
//     <div>
//       <button onClick={() => onClickChangeNumber()}>Click</button>
//     </div>
//   );
// };

// export default Baimoi1;

// VÍ DỤ  LƯU TỪ 2 STATE TRỞ LÊN

import React, { useReducer } from "react";

// state là giá trị cũ trước đó
// action là giá trị dispatch bắn dữ liệu  vô action
const reducer = (state, action) => {
  switch (action.type) {
    case "change_A":
      return { ...state, numberA: action.number };
    case "change_B":
      return { ...state, numberB: action.number };
    default:
      return state;
  }
};

const Baimoi1 = () => {
  const [state, dispatch] = useReducer(reducer, { numberA: 0, numberB: 0 });

  console.log("state", state);

  const CHANGE_A = () => {
    dispatch({ type: "change_A", number: 20 });
  };
  const CHANGE_B = () => {
    dispatch({ type: "change_B", number: 90 });
  };
  return (
    <div>
      <h2>Ví Dụ :</h2>
      <button onClick={CHANGE_A}>Click A</button>
      <button onClick={CHANGE_B}>Click B</button>
    </div>
  );
};

export default Baimoi1;
