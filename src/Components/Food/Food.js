import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Food.css";

const Food = (props) => {
  const { name, photo, price } = props.food;
  return (
    <div className="each-food">
      <img className="image" src={photo} alt="" />
      <div className="foos-info">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
      </div>
      <button onClick={() => props.buttonHandler(props.food)}>
        Add to Cart &nbsp; &nbsp;
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Food;
