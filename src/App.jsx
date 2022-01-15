import { BrowserRouter } from 'react-router-dom';
import { Basic } from "./Basic";
import { Enquete } from './Enquete';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Basic />
        <Enquete />
      </div>
    </BrowserRouter>
  );
}

export default App;
