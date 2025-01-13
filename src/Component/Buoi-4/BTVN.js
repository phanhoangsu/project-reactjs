import React from "react";

const BTVN = () => {
  return (
    <div style={{ width: "80%" }}>
      <div style={{ textAlign: "center", backgroundColor: "#92dfc8" }}>
        <h1>HEADER</h1>
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ width: "70%" }}>
          <div style={{ backgroundColor: "#ffff" }}>
            <h2 style={{ backgroundColor: "#e9e9e9" }}> Big Title</h2>
          </div>

          <div>
            <h3>Title 01</h3>
            <p>được cung cấp miễn phí, dịch nhanh các từ</p>
          </div>

          <div>
            <h3>Title 02</h3>
            <p>được cung cấp miễn phí, dịch nhanh các từ</p>
          </div>

          <div>
            <h3>Title 03</h3>
            <p>được cung cấp miễn phí, dịch nhanh các từ</p>
          </div>
        </p>
        <h1 style={{ width: "30%", backgroundColor: "#f2d8ca" }}>ASIDE</h1>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h2 style={{ width: "25%", backgroundColor: "#f2f1ca" }}>Box1</h2>
        <h2 style={{ width: "25%", backgroundColor: "#f2f1ca" }}>Box2</h2>
        <h2 style={{ width: "25%", backgroundColor: "#f2f1ca" }}>Box3</h2>
        <h2 style={{ width: "25%", backgroundColor: "#f2f1ca" }}>Box4</h2>
      </div>
      <div style={{ textAlign: "center", backgroundColor: "#eecbf3" }}>
        <h1>FOOTER</h1>
      </div>
    </div>
  );
};

export default BTVN;
