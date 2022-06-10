import React, { useReducer } from "react";
import { Link, useLocation } from "react-router-dom";

import reducer from '../reducers';

export const CounselingDetail = () => {
  const location = useLocation();
  const previousState = location.state;

  const [state, dispatch] = useReducer(reducer, previousState);

  const inputAnswer = (e) => {
    dispatch({
      type: 'COUNSELINGDETAIL_ANSWER',
      counselingDetail: e.target.value
    });
  };

  return (
    <>
      <div>
        <p>STEP3</p>
        <p>ご相談内容をご記入ください</p>
      </div>

      <div>
        <p>-ご相談内容-</p>
        <textarea type="text" value={state.counselingDetail} onChange={inputAnswer}></textarea>
      </div>
      <br />
      <div>
        <button><Link to="/question">前へ戻る</Link></button>
        <button><Link to="/confirmation" state={{ gender: state.gender, birthYear: state.birthYear, birthMonth: state.birthMonth, birthDay: state.birthDay, question: state.question, question2: state.question2, question3: state.question3, counselingDetail: state.counselingDetail }}>次へ進む</Link></button>
      </div>
    </>
  )
}