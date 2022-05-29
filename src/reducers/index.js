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
      return { 
        gender: action.gender,
        birthYear: action.birthYear,
        birthMonth: action.birthMonth,
        birthDay: action.birthDay
      }
    case 'ALL_ANSWERS':
      return state;
    default:
      return state;
  }
};

export default answers;
