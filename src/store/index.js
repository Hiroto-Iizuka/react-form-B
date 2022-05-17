import { createStore } from "redux";

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

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
