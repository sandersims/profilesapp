import React from 'react';
import Papa from 'papaparse';
import { API, graphqlOperation } from 'aws-amplify/api-graphql';
import { createIncomeData } from './graphql/mutations';

export default function CsvUploader() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        const records = results.data;

        for (const record of records) {
          const input = {
            institution: record["institution"],
            structuralUnit: record["structuralUnit"],
            position: record["position"],
            firstName: record["firstName"],
            lastName: record["lastName"],
            workload: record["workload"],
            basicSalary: parseFloat(record["salary"]),
          };

          try {
            await API.graphql(graphqlOperation(createIncomeData, { input }));
            console.log("Uploaded:", input);
          } catch (err) {
            console.error("Upload failed for:", input, err);
          }
        }

        alert("CSV upload complete!");
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Upload Officials CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}
