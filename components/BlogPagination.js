import React from 'react';
import Link from 'next/link';

const BlogPagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
      if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
      if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };

    return (
      <div className="blog__pagination">
        <ul>
          <li>
              <a onClick={prevPage}>
                <i className="fa-solid fa-arrow-left"></i>
              </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber} className={currentPage == pgNumber ? "active" : ""}>
                <a onClick={() => setCurrentPage(pgNumber)}>
                  <span>{pgNumber}</span>
                </a>
            </li>
          ))}

          <li>
              <a onClick={nextPage}>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
          </li>
        </ul>
      </div>
    );
};

export default BlogPagination;