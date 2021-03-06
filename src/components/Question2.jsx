import React from "react";

export const Question2 = ({ state, dispatch, setDisplayQuestion3 }) => {
  
  const answerQuestion = (e) => {
    dispatch({
      type: 'QUESTION2_ANSWER',
      question2: e.target.value
    });
  };

  const displayNextQuestion = () => {
    setDisplayQuestion3(true);
  };

  return (
    <>
      <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <label>
        <input type="radio" value="はい" onChange={answerQuestion} onClick={displayNextQuestion} checked={state.question2 === "はい"} />
        はい
      </label>
      <label>
        <input type="radio" value="いいえ" onChange={answerQuestion} onClick={displayNextQuestion} checked={state.question2 === "いいえ"} />
        いいえ
      </label>
    </>
  )
}