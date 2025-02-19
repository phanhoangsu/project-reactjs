import React from "react";

const Main = () => {
  return (
    <div
      style={{
        width: "50vw",
        height: "25vw",
        backgroundColor: "red",
        margin: "20px",
        borderRadius: "5px",
      }}
    >
      <div>
        <h3>Filter by year</h3>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <select>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
          </select>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <h2>Toilet Paper</h2>

        <div style={{ display: "flex" }}>
          <h4 style={{ border: "1px solid black" }}>20.000$</h4>
          <button>Change Tide</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
