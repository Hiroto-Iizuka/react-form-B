import React, { useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import reducer from '../reducers';

export const CounselingDetail = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [counselingDetail, setCounselingDetail] = useReducer('');

  const location = useLocation();
  const counselingDetailState = location.state;

  const writeCounselingDetail = (e) => {
    setCounselingDetail(e.target.value);
    console.log(counselingDetail)
  }

  const answerCounselingDetail = (e) => {
    dispatch({
      type: 'COUNSELINGDETAIL_ANSWERS',
      counselingDetail,
    });
    setCounselingDetail('');
    // state確認用
    console.log(state)
  }


  console.log(state);
  return (
    <>
      <div>
        <p>STEP3</p>
        <p>ご相談内容をご記入ください</p>
      </div>

      <div>
        <p>-ご相談内容-</p>
        <textarea type="text" onChange={writeCounselingDetail}></textarea>
      </div>
      <br />
      <div>
        <button><Link to="/question">前へ戻る</Link></button>
        <button onClick={answerCounselingDetail}><Link to="/confirmation" state={{ gender: state.gender, birthYear: state.birthYear, birthMonth: state.birthMonth, birthDay: state.birthDay, question: state.question, question2: state.question2, question3: state.question3, counselingDetail: counselingDetailState.CounselingDetail }}>次へ進む</Link></button>
      </div>
    </>
  )
}