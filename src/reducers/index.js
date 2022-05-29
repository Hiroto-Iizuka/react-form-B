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
    case 'QUESTION_ANSWERS':
      return {
        question: action.question,
        question2: action.question2,
        question3: action.question3,
      }
    case 'COUNSELINGDETAIL_ANSWER':
      return {
        counselingDetail: action.counselingDetail,
      }
    case 'ALL_ANSWERS':
      return state;
    default:
      return state;
  }
};

export default answers;
