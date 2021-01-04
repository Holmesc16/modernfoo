import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ perPage, totalCount, currentPage, skip, base }) => {
  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <>
      <Link to={`/${base}/${currentPage - 1}/`}>next</Link>
    </>
  );
};

export default Pagination;
