export const counselingDetail = (counseling_detail) => {
  return {
    type: 'DISPLAY_COUNSELING_DETAIL_ANSWER',
    payload: { counselign_detail: counseling_detail }
  }
}