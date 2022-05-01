import { Link } from "react-router-dom";
import { useState } from "react";
import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";

export const Question = () => {
  const [questionAnswer, setQuestionAnswer] = useState();
  const [questionAnswer2, setQuestionAnswer2] = useState();
  const [questionAnswer3, setQuestionAnswer3] = useState();

  const [displayQuestion2, setDisplayQuestion2] = useState(false);
  const [displayQuestion3, setDisplayQuestion3] = useState(false);

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
        <button><Link to="/counselingdetail">次へ進む</Link></button>
      </div>
    </>
  )
}