export const questionAnswer = (question) => {
  return {
    type: 'DISPLAY_QUESTION_ANSWER',
    payload: {
      question1: question.question1,
      question2: question.question2,
      question3: question.question3
    }
  }
}