import { createStore, combineReducers } from "redux";
import Gender from "../components/Gender"

function updateBasicAnswer(payload) {
  return {
    type: 'UPDATE_BASIC_ANSWER',
    payload: payload
  }
}

const initialState = (
  state = {
    basic: {
      gender: "未入力",
      birth_year: 1992,
      birth_month: 1,
      birth_day: 1,
    }
  }
) => {
  return state;
};

const basicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_ANSWER':
      return {
        gender: updateBasicAnswer()
      };
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  basicReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());

export default store;