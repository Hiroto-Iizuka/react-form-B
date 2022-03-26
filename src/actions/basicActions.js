export const basic = (answer) => {
  return {
    type: 'DISPLAY_BASIC',
    payload: {
      gender: answer.gender,
      year: answer.year,
      month: answer.month,
      day: answer.day
    }
  }
}