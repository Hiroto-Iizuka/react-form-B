import { BrowserRouter } from 'react-router-dom';
import { Basic } from "./Basic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ホームページ</h1> 
        <Basic />
      </div>
    </BrowserRouter>
  );
}

export default App;
