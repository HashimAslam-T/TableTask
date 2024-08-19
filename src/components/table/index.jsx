// import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from '../TableRow';
import './Table.scss';

const Table = () => {
  const tableData = useSelector((state) => state.table);

  return (
    <div className="mainContainer">
    <h1>Table</h1>
    <table className="editable-table">
      <thead>
        <tr>
          <th>Deliverable ID</th>
          <th>Deliverables</th>
          <th>Deliverable Name</th>
          <th>Final Creator Price</th>
          <th>Final Brand Price</th>
          <th>Deliverable Approved</th>
          <th>Content Published</th>
          <th>Post Link</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <TableRow key={row.id} row={row} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
