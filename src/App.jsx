import { BrowserRouter } from 'react-router-dom';
import { Basic } from "./Basic";
import { CounselingDetail } from './CounselingDetail';
import { Enquete } from './Enquete';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Basic />
        <Enquete />
        <CounselingDetail />
      </div>
    </BrowserRouter>
  );
}

export default App;
