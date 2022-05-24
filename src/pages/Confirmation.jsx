import React, { useReducer, useState } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import reducer from '../reducers'

export const Confirmation = ({ gender, birthYear, birthMonth, birthDay, question1, question2, question3, counselingDetail }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div>
        <p>STEP4</p>
        <p>以下の内容をご確認ください</p>
      </div>
      <div>
        <p>性別</p>
        <p>{state.gender}</p>
        <p>{state}</p>
      </div>
      <div>
        <p>生年月日</p>
        <p>{`${birthYear}年${birthMonth}月${birthDay}日`}</p>
      </div>
      <div>
        <p>現在、生命保険に加入されていますか？</p>
        <p>{question1}</p>
      </div>
      <div>
        <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <p>{question2}</p>
      </div>
      <div>
        <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <p>{question3}</p>
      </div>
      <div>
        <p>ご相談内容</p>
        <p>{counselingDetail}</p>
      </div>
      <br />
      <div>
        <button><Link to="/counselingdetail">前へ戻る</Link></button>
        <button><Link to="">送信</Link></button>
      </div>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     gender: state.gender,
//     birthYear: state.birthYear,
//     birthMonth: state.birthMonth,
//     birthDay: state.birthDay,
//     question1: state.question1,
//     question2: state.question2,
//     question3: state.question3,
//     counselingDetail: state.counselingDetail,
//   }
// }

// export default connect(mapStateToProps)(Confirmation);

export default Confirmation;
