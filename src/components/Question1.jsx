import React from "react";

export const Question1 = ({ questionAnswer, setQuestionAnswer, setDisplayQuestion2 }) => {

  const answerQuestion = (e) => {
    setQuestionAnswer(e.target.value);
  }

  const displayNextQuestion = () => {
    setDisplayQuestion2(true);
  }

  return (  
    <>
      <p>現在、生命保険に加入されていますか？</p>
      <label>
        <input type="radio" value="はい" onChange={answerQuestion} onClick={displayNextQuestion} checked={questionAnswer === "はい"} />
        はい
      </label>
      <label>
        <input type="radio" value="いいえ" onChange={answerQuestion} onClick={displayNextQuestion} checked={questionAnswer === "いいえ"} />
        いいえ
      </label>
    </> 
  )
  
}