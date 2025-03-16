import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Institution</th>
          <th>Structural Unit</th>
          <th>Position</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Workload</th>
          <th>Basic Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.institution}</td>
            <td>{row.structuralUnit}</td>
            <td>{row.position}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.workload}</td>
            <td>{row.basicSalary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;