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
    case 'GENDER_ANSWER':
      return {
        ...state,
        gender: action.gender,
      }
    case 'BIRTHYEAR_ANSWER':
      return {
        ...state,
        birthYear: action.birthYear,
      }
    case 'BIRTHMONTH_ANSWER':
      return {
        ...state,
        birthMonth: action.birthMonth,
      }
    case 'BIRTHDAY_ANSWER':
      return {
        ...state,
        birthDay: action.birthDay,
      }      
    // case 'BASIC_ANSWERS':
    //   return {
    //     ...state,
    //     gender: action.gender,
    //     birthYear: action.birthYear,
    //     birthMonth: action.birthMonth,
    //     birthDay: action.birthDay
    //   }
    // case 'QUESTION_ANSWERS':
    //   return {
    //     ...state,
    //     question: action.question,
    //     question2: action.question2,
    //     question3: action.question3,
    //   }
    case 'QUESTION1_ANSWER':
      return {
        ...state,
        question: action.question,
      }
    case 'QUESTION2_ANSWER':
      return {
        ...state,
        question2: action.question2,
      }
    case 'QUESTION3_ANSWER':
      return {
        ...state,
        question3: action.question3,
      }
    case 'COUNSELINGDETAIL_ANSWER':
      return {
        ...state,
        counselingDetail: action.counselingDetail,
      }
    default:
      return state;
  }
};

export default answers;
