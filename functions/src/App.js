import logo from './logo.svg';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import './App.css';

import DragNdrop from './pages/DragNdrop';

function App() {
  return (
    <div className="App">
      <Link to="/dragNdrop">드래그 앤 드랍</Link>
      <Routes>
        <Route path="/dragNdrop" element={<DragNdrop />} />
      </Routes>

    </div>
  );
}

export default App;
