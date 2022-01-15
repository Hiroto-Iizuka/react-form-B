import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basic } from "./Basic";
import { Enquete } from './Enquete';
import { CounselingDetail } from './CounselingDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/enquete" element={<Enquete />} />
        <Route path="/counselingdetail" element={<CounselingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
