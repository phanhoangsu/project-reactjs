import React from "react";

const CardItem = (props) => {
  const { title, icon, discription } = props;
  return (
    <li>
      <div>
        <h2>{icon}</h2>
        <h2>{title}</h2>
        <p>{discription}</p>
      </div>
    </li>
  );
};

export default CardItem;
