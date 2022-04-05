import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basic } from "./Basic";
import { Question } from './Question';
import { CounselingDetail } from './CounselingDetail';
import { Confirmation } from './Confirmation';
import { Provider } from 'react-redux';
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
