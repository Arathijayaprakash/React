/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "@mui/material";
import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={classes.pagination}>
        <Button >Previous</Button>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.page_items}>
            <Button
              onClick={() => paginate(number)}
              className={number === currentPage ? classes.active : undefined}
            >
              {number}
            </Button>
          </li>
        ))}
        <Button>Next</Button>
      </ul>
    </nav>
  );
};

export default Pagination;
