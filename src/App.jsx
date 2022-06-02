import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basic } from "./pages/Basic";
import { Question } from './pages/Question';
import { CounselingDetail } from './pages/CounselingDetail';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/question" element={<Question />} />
        <Route path="/counselingdetail" element={<CounselingDetail />} />
        <Route path="/confirmation" element={<Confirmation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
