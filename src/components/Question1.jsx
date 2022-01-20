import React, { useState } from "react";

export const Question1 = (props) => {
  const [questionAnswer, setQuestionAnswer] = useState();

  const answerQuestion = (e) => {
    setQuestionAnswer(e.target.value);
  }

  const displayNextQuestion = () => {
    props.setDisplayQuestion2(true);
  } 

  
  return (  
    <>
      <p>現在、生命保険に加入されていますか？</p>
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