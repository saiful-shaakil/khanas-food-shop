import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <div>
          <h1>Khana's</h1>
        </div>
        <div>
          <a href="./Home">Home</a>
          <a href="./Shop">Shop</a>
          <a href="./About Us">About Us</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
