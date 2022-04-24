import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basic } from "./pages/Basic";
import { Question } from './pages/Question';
import { CounselingDetail } from './pages/CounselingDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/question" element={<Question />} />
        <Route path="/counselingdetail" element={<CounselingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
