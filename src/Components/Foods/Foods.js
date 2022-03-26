import React, { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
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
    const exists = cart.find((p) => p.id === food.id);
    if (!exists) {
      newCart = [...cart, food];
    } else {
      const rest = cart.filter((t) => t.id !== food.id);
      newCart = [...cart, rest];
    }
    setCarts(newCart);
  };
  return (
    <div className="foods-container">
      <div className="foods">
        {foods.map((food) => (
          <Food buttonHandler={addToCart} food={food} key={food.id}></Food>
        ))}
      </div>
      <div>
        <Carts cart={cart}></Carts>
      </div>
    </div>
  );
};

export default Foods;
