/*import React from 'react';

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

export default DataTable;*/
import React, { useEffect, useState } from 'react';

function IncomeData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://j12f80h5b9.execute-api.eu-north-1.amazonaws.com/dev/income')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Asutus</th>
          <th>Struktuuriüksus</th>
          <th>Ametikoht</th>
          <th>Eesnimi</th>
          <th>Perekonnanimi</th>
          <th>Töökoormus</th>
          <th>Palk</th>
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
            <td>{row.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default IncomeData;