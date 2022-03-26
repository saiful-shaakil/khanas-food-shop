import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const addToCart = (food) => {
    let newCart = [];
  };
  return (
    <div className="foods-container">
      <div className="foods">
        {foods.map((food) => (
          <Food buttonHandler={addToCart} food={food} key={food.id}></Food>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Foods;
