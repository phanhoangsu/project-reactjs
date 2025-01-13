import React from "react";

const Voting = () => {
  return (
    <div style={{ border: "2px solid tomato", padding: "10px" }}>
      <div
        style={{ width: "80vh", border: "1px solid black", display: "flex" }}
      >
        <div
          style={{ backgroundColor: "red", height: "50px", width: "50%" }}
        ></div>
        <div
          style={{ backgroundColor: "green", height: "50px", width: "50%" }}
        ></div>
      </div>
      <div>
        <button>Vot A</button>
        <button>Vot B</button>
      </div>
    </div>
  );
};

export default Voting;
