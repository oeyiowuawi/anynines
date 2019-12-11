import React from 'react';

const Pagination = ({perPage, totalDevs, paginate, currentPage}) => {
  const pageNumber= []

  for(let i = 1; i <= Math.ceil(totalDevs / perPage); i++) {
    pageNumber.push(i)
  }

  return(
    <nav>
      <ul className="pagination">
        {
          pageNumber.map(number => (
            <li className={`page-item ${currentPage == number ? 'active' : null}`} key={number}>
              <a onClick={(e) => paginate(number, e)} href="!#" className="page-link"> {number }</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )

}

export default Pagination