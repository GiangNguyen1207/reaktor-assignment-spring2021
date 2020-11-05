import React from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "redux/actions";
import "./styles.scss";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const categories = ["jackets", "shirts", "accessories"];

  return (
    <ul className="nav-list">
      {categories.map((cat) => {
        return (
          <li
            className="nav-list__item"
            key={cat}
            onClick={() => dispatch(getProducts(cat))}
          >
            {cat}
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationBar;
