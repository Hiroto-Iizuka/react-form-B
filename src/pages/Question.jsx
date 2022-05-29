import React, { useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";

import reducer from '../reducers'

export const Question = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const location = useLocation();
  const questionState = location.state;

  const [questionAnswer, setQuestionAnswer] = useState();
  const [questionAnswer2, setQuestionAnswer2] = useState();
  const [questionAnswer3, setQuestionAnswer3] = useState();

  const [displayQuestion2, setDisplayQuestion2] = useState(false);
  const [displayQuestion3, setDisplayQuestion3] = useState(false);

  const answerQuestion = (e) => {
    dispatch({
      type: 'QUESTION_ANSWERS',
      questionAnswer,
      questionAnswer2,
      questionAnswer3,
    });
    setQuestionAnswer('');
    setQuestionAnswer2('');
    setQuestionAnswer3('');
    // state確認用
    console.log(state)
  }

  return (
    <>
      <div>
        <p>STEP2</p>
        <p>以下にお答えください</p>
      </div>
      <div>
        <Question1 questionAnswer={questionAnswer} setQuestionAnswer={setQuestionAnswer} setDisplayQuestion2={setDisplayQuestion2} />
        { displayQuestion2 && <Question2 questionAnswer2={questionAnswer2} setQuestionAnswer2={setQuestionAnswer2} setDisplayQuestion3={setDisplayQuestion3} /> }
        { displayQuestion3 && <Question3 questionAnswer3={questionAnswer3} setQuestionAnswer3={setQuestionAnswer3} /> }
      </div>
      <br />
      <div>
        <button><Link to="/">前へ戻る</Link></button>
        <button onClick={answerQuestion}><Link to="/counselingdetail" state={{ gender: state.gender, birthYear: state.birthYear, birthMonth: state.birthMonth, birthDay: state.birthDay, question: questionState.question, question2: questionState.question2, question3: questionState.question3}}>次へ進む</Link></button>
      </div>
    </>
  )
}