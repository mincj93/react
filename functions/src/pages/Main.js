import React, { useState } from 'react';
import * as XLSX from 'xlsx';
// import "./functionCSS/common.css"

const lg = console.log;

const Main = () => {
    const [excelData, setExcelData] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array', encoding: 'utf-8' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            setExcelData(jsonData);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <h1>엑셀 읽기</h1>
            <input type="file" onChange={handleFileUpload} />
            {excelData && (
                <div style={{ width: "100%" }}>
                    <h2>엑셀 데이터</h2>
                    <pre>{JSON.stringify(excelData, null, 2, 'UTF-8')}</pre>
                </div>
            )}
        </div>
    );
}

export default Main;