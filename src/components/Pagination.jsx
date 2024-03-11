import React from "react";
import next3 from "../images/next3.png";
import "./pagination.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="flex justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={goToPrevPage} href="#f">
            <img
              src={next3}
              alt=""
              className="h-6 w-6  mr-2 cursor-pointer scale-x-[-1] "
            />
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item  ${
              currentPage === pgNumber ? "active" : ""
            } `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#f"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#f">
            <img src={next3} alt="" className="h-6 w-6  mr-2 cursor-pointer " />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
