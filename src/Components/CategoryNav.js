import React from "react";
import classes from "./CategoryNav.module.css";
import { NavLink } from "react-router-dom";
import useFetch from "./useFetch";

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
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to={`/products/${category}`}
          >
            <li>{category}</li>
          </NavLink>
        ))}

      </ul>
    </nav>
  );
};

export default CategoryNav;
