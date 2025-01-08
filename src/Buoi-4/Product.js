import React from "react";
// import style from "./productItem.modul.css";

const Product = ({ img, title, description, price }) => {
  // const { img, title, description, price } = product;
  return (
    <div
      style={{
        width: "350px",
        textAlign: "center",
        border: "3px solid #e5e5e5",
      }}
    >
      <div
        className={["product-item"]}
        style={{
          padding: "5px",
          backgroundColor: "white",
          borderBottom: "3px solid #e5e5e5",
        }}
      >
        <img style={{ width: "100%" }} src={img} alt="san pham" />
      </div>
      <div style={{ padding: "10px 5px" }}>
        <h2>{title}</h2>
        <p style={{ margin: "8px 0px" }}>{description}</p>
        <h3 style={{ color: "red" }}>{price}</h3>
      </div>
    </div>
  );
};

export default Product;
