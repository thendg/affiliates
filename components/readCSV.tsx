import React, { useState } from 'react';
import Papa from 'papaparse';

const ReadCSV = () => {
  var data;

  Papa.parse('./resources/user_dummy_data', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
      console.log(results);
      console.log('ya mum');
      data = results.data;
    },
  });
  return <>data: {data}</>;
};

/* const readCSV = (filePath: String) => {
  const [data, setData] = useState([]);
  const fs = require('fs');
  const csvFilePath = '../resources/user_dummy_data.csv';

  const csv = fs.readFileSync(filePath);
  const csvData = csv.toString();
  return new Promise(resolve => {
    Papa.parse(csvData, {
      header: true,
      complete: results => {
        console.log('Complete', results.data.length, 'records.');
        resolve(results.data);
      },
    });
  });
}; */

export default ReadCSV;
