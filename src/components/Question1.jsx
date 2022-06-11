import React from "react";

export const Question1 = ({ state, dispatch, setDisplayQuestion2 }) => {

  const answerQuestion = (e) => {
    dispatch({
      type: 'QUESTION1_ANSWER',
      question: e.target.value
    });
  };

  const displayNextQuestion = () => {
    setDisplayQuestion2(true);
  };

  return (  
    <>
      <p>現在、生命保険に加入されていますか？</p>
      <label>
        <input type="radio" value="はい" onChange={answerQuestion} onClick={displayNextQuestion} checked={state.question === "はい"} />
        はい
      </label>
      <label>
        <input type="radio" value="いいえ" onChange={answerQuestion} onClick={displayNextQuestion} checked={state.question === "いいえ"} />
        いいえ
      </label>
    </> 
  )
  
}