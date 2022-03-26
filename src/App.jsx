import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basic } from "./Basic";
import { Question } from './Question';
import { CounselingDetail } from './CounselingDetail';
import { Confirmation } from './Confirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/question" element={<Question />} />
        <Route path="/counselingdetail" element={<CounselingDetail />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
