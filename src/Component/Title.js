import React, { useState } from "react";

const Title = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (item) => {
    setEnteredTitle(item.target.value);
  };

  const amountChangeHandler = (item) => {
    setEnteredAmount(item.target.value);
  };

  const dateChangeHandler = (item) => {
    setEnteredDate(item.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    console.log(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div
      style={{
        borderRadius: "5px",
        width: "50vw",
        height: "15vw",
        backgroundColor: "#a892ee",
        margin: "20px",
      }}
    >
      <form onSubmit={submitHandler}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default Title;

// import React, { useState } from "react";

// const Title = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };
//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//   };

//   const enteredData = {
//     title: enteredTitle,
//     amount: enteredAmount,
//     date: enteredDate,
//   };

//   console.log(enteredData);

//   setEnteredTitle("");
//   setEnteredAmount("");
//   setEnteredDate("");

//   return (
//     <div
//       style={{
//         borderRadius: "5px ",
//         width: "50vw",
//         height: "15vw",
//         backgroundColor: "#a892ee",
//         margin: "20px",
//       }}
//     >
//       <form onSubmit={submitHandler}>
//         <div style={{ display: "flex", gap: "20px" }}>
//           <div>
//             <label> Title</label>
//             <input
//               type="text"
//               value={enteredTitle}
//               onChange={titleChangeHandler}
//             />
//           </div>
//           <div>
//             <label> Anmout</label>
//             <input
//               type="number"
//               value={enteredAmount}
//               onChange={amountChangeHandler}
//             />
//           </div>
//         </div>
//         <div>
//           <div>
//             <label> Date</label>
//             <input
//               type="date"
//               value={enteredDate}
//               onChange={dateChangeHandler}
//             />
//           </div>
//         </div>
//         <div style={{ display: "flex", justifyContent: "end" }}>
//           <button type="submit">Add Expense</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Title;
