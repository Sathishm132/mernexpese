import React, { useRef } from 'react';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
   const row=useRef()
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const changehandler=(e)=>{
    e.preventDefault()
    localStorage.setItem("row",row.current.value)

  }

  return (
    <nav>
      <ul className="pagination">
      <input type="number"ref={row} onChange={changehandler} />
        {pageNumbers.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;








