import logo from './logo.svg';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import DragNdrop from './pages/DragNdrop';
import ExcelReader from './pages/ExcelReader';
import ExcelWriter from './pages/ExcelWriter';
import Popup from './pages/Popup';

function App() {
  return (
    <div className="App">
      <Link to="/">메인</Link>
      <Link to="/dragNdrop">드래그 앤 드랍</Link>
      <Link to="/excelReader">엑셀데이터 JSON 화</Link>
      <Link to="/excelWriter">엑셀만들기</Link>
      <Link to="/popup">팝업</Link>
      <Routes>
        <Route path="/dragNdrop" element={<Main />} />
        <Route path="/dragNdrop" element={<DragNdrop />} />
        <Route path="/excelReader" element={<ExcelReader />} />
        <Route path="/excelWriter" element={<ExcelWriter />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>

    </div>
  );
}

export default App;
