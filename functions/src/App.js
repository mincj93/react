import logo from './logo.svg';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import './App.css';

import DragNdrop from './pages/DragNdrop';
import ExcelReader from './pages/ExcelReader';
import ExcelWriter from './pages/ExcelWriter';

function App() {
  return (
    <div className="App">
      <Link to="/dragNdrop">드래그 앤 드랍</Link>
      <Link to="/excelReader">엑셀데이터 JSON 화</Link>
      <Link to="/excelWriter">엑셀만들기</Link>
      <Routes>
        <Route path="/dragNdrop" element={<DragNdrop />} />
        <Route path="/excelReader" element={<ExcelReader />} />
        <Route path="/excelWriter" element={<ExcelWriter />} />
      </Routes>

    </div>
  );
}

export default App;
