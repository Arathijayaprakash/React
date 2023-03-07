/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "@mui/material";
import React from "react";
import './Pagination.css'

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  return (
    <nav>
      <ul className="pagination">
        <Button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
               >
          prev
        </Button>
        {pageNumbers.map((number) => (
          <Button
            onClick={() => paginate(number)}
            className={`paginationItem ${
              currentPage === number ? "active" : null
            }`}
          >
            {number}
          </Button>
        ))}
        <Button
          onClick={goToNextPage}
          className={`next ${currentPage === pageNumbers.length ? "disabled" : ""}`}
        >
          next
        </Button>
      </ul>
    </nav>
  );
};

export default Pagination;
