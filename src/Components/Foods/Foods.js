import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="foods-container">
      <div className="foods">
        {foods.map((food) => (
          <Food food={food} key={food.id}></Food>
        ))}
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default Foods;
