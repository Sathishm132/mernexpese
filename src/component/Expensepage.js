import React, { useState } from 'react';
import { DeleteExpense, Editexpense } from './Expensecard';
import Pagination from './Pagination';

const MainComponent = (props) => {
  const itemsPerPage = localStorage.getItem("row"); // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data - replace this with your actual data source
  

  // Calculate the current items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.expenses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const DynamicTable = () => {
      
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
      };
      
      const thStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        textAlign: 'left',
      };
      
      const tdStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        textAlign: 'left',
      };
    return (
      <>
      <table style={tableStyle}>
        <thead style={thStyle}>
          <tr>
            <th>date</th>
            <th>expense amount</th>
            <th>expense catregory</th>
            <th>expense description</th>
            <th>actons</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.expenseDate}>
              <td style={tdStyle}>{item.expenseDate}</td>
              <td style={tdStyle}>{item.expenseamount}</td>
              <td style={tdStyle}>{item.expensecategory}</td>
              <td style={tdStyle}>{item.expenseDescription}</td>
              <td style={tdStyle}><DeleteExpense id={item.id}/><Editexpense id={item.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  };

  return (
    <div>
      <DynamicTable/>
    

      {/* Render pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(props.expenses.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainComponent;
