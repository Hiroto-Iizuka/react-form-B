import { createStore } from "redux";
import { Basic } from '../pages/Basic';
import { Question } from '../pages/Question';
import { CounselingDetail } from '../pages/CounselingDetail';

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

const reducer = (state = initialState, action, payload) => {
  switch (action.type) {
    case 'ANSWERS':
      return {
        gender: state.gender = payload,
        birthYear: state.birthYear = Basic.birthYear,
        birthMonth: state.birthMonth = Basic.birthMonth,
        birthDay: state.birthDay = Basic.birthDay,
        question1: state.question1 = Question.question,
        question2: state.question2 = Question.question2,
        question3: state.question3 = Question.question3,
        counselingDetail: state.counselingDetail = CounselingDetail,
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
