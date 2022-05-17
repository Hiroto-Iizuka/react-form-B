import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basic } from "./pages/Basic";
import { Question } from './pages/Question';
import { CounselingDetail } from './pages/CounselingDetail';
import Confirmation from './pages/Confirmation';

import { connect } from "react-redux";

function App({gender}) {
  return (
    <BrowserRouter>
      <div className="App">
        {gender}
      </div>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/question" element={<Question />} />
        <Route path="/counselingdetail" element={<CounselingDetail />} />
        <Route path="/confirmation" element={<Confirmation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    gender: state.gender,
    birthYear: state.birthYear,
    birthMonth: state.birthMonth,
    birthDay: state.birthDay,
    question1: state.question1,
    question2: state.question2,
    question3: state.question3,
    counselingDetail: state.counselingDetail,
  }
}

export default connect(mapStateToProps)(App);
// export default App;

