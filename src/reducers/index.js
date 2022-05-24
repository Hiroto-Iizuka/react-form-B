// import { createStore } from "redux";
// import { Basic } from '../pages/Basic';
// import { Question } from '../pages/Question';
// import { CounselingDetail } from '../pages/CounselingDetail';

const initialState = {
  gender: "男性",
  birthYear: "1999",
  birthMonth: "12",
  birthDay: "12",
  question1: "いいえ",
  question2: "いいえ",
  question3: "いいえ",
  counselingDetail: "テストテストテストテストテスト",
};

const answers = (state = initialState, action) => {
  switch (action.type) {
    case 'BASIC_ANSWERS':
      const basicAnswers = { 
        gender: state.gender = action.gender, 
        birthYear: state.birthYear = action.birthYear,
        birthMonth:  state.birthMonth = action.birthMonth,
        birthDay:  state.birthDay = action.birthDay
      }
      return [...state, {...basicAnswers}]
    default:
      return state;
  }
};

// const store = createStore(reducer);

export default answers;
