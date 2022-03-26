import React from "react";
import "./Food.css";

const Food = (props) => {
  const { name, photo, price } = props.food;
  return (
    <div className="each-food">
      <img className="image" src={photo} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default Food;
