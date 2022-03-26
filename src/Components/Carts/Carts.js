import React from "react";
import "./Carts.css";

const Carts = ({ cart }) => {
  let randomItems = [];
  let name, name1, name2, name3;
  if (cart.length === 1) {
    name = cart[0].name;
  }
  if (cart.length === 2) {
    name = cart[0].name;
    name1 = cart[1].name;
  }
  if (cart.length === 3) {
    name = cart[0].name;
    name1 = cart[1].name;
    name2 = cart[2].name;
  }
  if (cart.length === 4) {
    name = cart[0].name;
    name1 = cart[1].name;
    name2 = cart[2].name;
    name3 = cart[3].name;
    randomItems.push(name, name1, name2, name3);
  }
  if (cart.length > 4) {
    name = cart[0].name;
    name1 = cart[1].name;
    name2 = cart[2].name;
    name3 = cart[3].name;
    randomItems.push(name, name1, name2, name3);

    alert("You've already added 4 items");
  }
  const chooseOne = () => {
    if (randomItems.length < 4) {
      alert("You've to added 4 items");
    } else {
      alert(
        "You've got " +
          randomItems[Math.floor(Math.random() * randomItems.length)]
      );
    }
  };
  console.log(randomItems);
  return (
    <div className="cart">
      <h2>Selected Products</h2>
      <div>
        {name} <br />
        {name1} <br />
        {name2} <br />
        {name3}
      </div>
      <button onClick={chooseOne}>Choose 1 For Me</button> <br />
      <button>Choose Again</button>
    </div>
  );
};

export default Carts;
