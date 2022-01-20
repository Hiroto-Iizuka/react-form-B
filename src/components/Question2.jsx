import React, { useState } from "react";

export const Question2 = (props) => {
  const [questionAnswer, setQuestionAnswer] = useState();


  const answerQuestion = (e) => {
    setQuestionAnswer(e.target.value);
  }

  const displayNextQuestion = () => {
    props.setDisplayQuestion3(true);
  } 

  return (
    <>
      <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <label>
        <input type="radio" value="yes" onChange={answerQuestion} onClick={displayNextQuestion} checked={questionAnswer === "yes"} />
        はい
      </label>
      <label>
        <input type="radio" value="no" onChange={answerQuestion} onClick={displayNextQuestion} checked={questionAnswer === "no"} />
        いいえ
      </label>
    </>
  )
}