import { createStore } from "redux";

const initialState = {
  gender: "男性",
  birthYear: 2000,
  birthMonth: 4,
  birthDay: 1
}

export const basicAnswersReducer = (state = initialState) => state;

const store = createStore(basicAnswersReducer);

export default store;