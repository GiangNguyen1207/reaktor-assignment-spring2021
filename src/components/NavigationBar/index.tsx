import React from "react";

import "./styles.scss";

const NavigationBar = () => {
  const categories = ["jackets", "shirts", "accessories"];
  return (
    <ul className="nav-list">
      {categories.map((cat) => {
        return <li className="nav-list__item">{cat}</li>;
      })}
    </ul>
  );
};

export default NavigationBar;
