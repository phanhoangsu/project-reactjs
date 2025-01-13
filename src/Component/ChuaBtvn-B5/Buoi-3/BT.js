import React from "react";

const BT = (props) => {
  const { link, tenSp, vocher, gia } = props;
  return (
    <div
      style={{ margin: "15px", border: "1px solid #d4d4d4", padding: "10 px" }}
    >
      <div>
        <img src={link} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>{tenSp}</h3>
        <p> {vocher}</p>
        <p style={{ color: "red" }}>{gia} </p>
      </div>
    </div>
  );
};

export default BT;
