export const counselingDetail = (counseling_detail) => {
  return {
    type: 'DISPLAY_COUNSELING_DETAIL_ANSWER',
    payload: { counseling_detail: counseling_detail }
  }
}