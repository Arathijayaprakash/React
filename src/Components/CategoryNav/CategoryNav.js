import React from "react";
import classes from "./CategoryNav.module.css";
import {Link } from "react-router-dom";
import useFetch from "../useFetch";

const CategoryNav = () => {
  const [products] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
  );

  const categories = products.map((product) => product.category);

  const unique = Array.from(new Set(categories));

  return (
    <nav>
      <ul className={classes.lists}>
        {unique.map((category) => (
          <Link to={`/products/${category}`}>
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
