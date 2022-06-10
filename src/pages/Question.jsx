import React, { useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";

import reducer from '../reducers'

export const Question = () => {
  const location = useLocation();
  const basicState = location.state;

  const [state, dispatch] = useReducer(reducer, basicState);

  const [displayQuestion2, setDisplayQuestion2] = useState(false);
  const [displayQuestion3, setDisplayQuestion3] = useState(false);

  return (
    <>
      <div>
        <p>STEP2</p>
        <p>以下にお答えください</p>
      </div>

      <div>
        <Question1 state={state} dispatch={dispatch} setDisplayQuestion2={setDisplayQuestion2} />
        { displayQuestion2 && <Question2 state={state} dispatch={dispatch} setDisplayQuestion3={setDisplayQuestion3} /> }
        { displayQuestion3 && <Question3 state={state} dispatch={dispatch} /> }
      </div>
      <br />
      <div>
        <button><Link to="/">前へ戻る</Link></button>
        <button><Link to="/counselingdetail" state={{ gender: state.gender, birthYear: state.birthYear, birthMonth: state.birthMonth, birthDay: state.birthDay, question: state.question, question2: state.question2, question3: state.question3}}>次へ進む</Link></button>
      </div>
    </>
  )
}