// import React, { useState } from 'react';
// import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';

// const ExcelWriter = () => {
//   const [data, setData] = useState([]);
//   const [fileName, setFileName] = useState('');

//   const handleInputChange = (index, columnName, value) => {
//     const newData = [...data];
//     newData[index] = { ...newData[index], [columnName]: value };
//     setData(newData);
//   };

//   const addRow = () => {
//     setData([...data, { name: '', age: '', email: '' }]);
//   };

//   const exportToExcel = () => {
//     const csvData = data.map(row => [row.name, row.age, row.email].join('\t')).join('\n');
//     const header = ['Name', 'Age', 'Email'].join('\t') + '\n';
//     const csvContent = '\uFEFF' + header + csvData; // BOM 추가

//     const blob = new Blob([csvContent], { type: 'text/plain;charset=utf-8' });
//     saveAs(blob, `${fileName}.xls`);
//   };

//   return (
//     <div>
//       <h1>Excel Writer</h1>
//       <input type="text" placeholder="File Name" value={fileName} onChange={e => setFileName(e.target.value)} />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td><input type="text" value={row.name} onChange={e => handleInputChange(index, 'name', e.target.value)} /></td>
//               <td><input type="text" value={row.age} onChange={e => handleInputChange(index, 'age', e.target.value)} /></td>
//               <td><input type="text" value={row.email} onChange={e => handleInputChange(index, 'email', e.target.value)} /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={addRow}>Add Row</button>
//       <button onClick={exportToExcel}>Export to Excel</button>
//     </div>
//   );
// };

// export default ExcelWriter;


import React, { useState } from 'react';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import moment from 'moment';

const ExcelGenerator = () => {
  const mmt = moment();
  let now = mmt.format('YYYYMMDD_hhmmss');

  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState('');

  const handleInputChange = (index, columnName, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [columnName]: value };
    setData(newData);
  };

  const addRow = () => {
    setData([...data, { name: '', age: '', email: '' }]);
  };

  const exportToExcel = () => {
    const csvData = data.map(row => [row.name, row.age, row.email].join('\t')).join('\n');
    const header = ['Name', 'Age', 'Email'].join('\t') + '\n';
    const csvContent = '\uFEFF' + header + csvData; // BOM 추가

    const blob = new Blob([csvContent], { type: 'text/plain;charset=utf-8' });
    
    if(fileName == ''){
      setFileName(now);
    }
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <div>
      <h1>Excel Generator</h1>
      <input type="text" placeholder="File Name" onChange={e => setFileName(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td><input type="text" value={row.name} onChange={e => handleInputChange(index, 'name', e.target.value)} /></td>
              <td><input type="text" value={row.age} onChange={e => handleInputChange(index, 'age', e.target.value)} /></td>
              <td><input type="text" value={row.email} onChange={e => handleInputChange(index, 'email', e.target.value)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default ExcelGenerator;