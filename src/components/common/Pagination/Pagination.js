import React, { useState } from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChanged
}) => {

  const [visiblePages, setVisiblePages] = useState(5);

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageChange = (page) => {
    if (page === 'prev') {
      onPageChanged(currentPage - 1);
    } else if (page === 'next') {
      onPageChanged(currentPage + 1);
    } else {
      onPageChanged(page);
    }
  };

  return (
    <div className="pagination">
      {pages.map(p => (
        <span
          key={p}
          className={currentPage === p ? 'selectedPage' : ''}
          onClick={() => handlePageChange(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;