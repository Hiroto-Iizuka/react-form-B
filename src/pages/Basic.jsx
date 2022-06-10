import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { Gender } from "../components/Gender";
import { BirthDate } from "../components/BirthDate";

import reducer from '../reducers'

export const Basic = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>

      <Gender state={state} dispatch={dispatch} />
      <BirthDate state={state} dispatch={dispatch} />
      <br />
      <div>
        <button><Link to={{pathname: "/question"}} state={{gender: state.gender, birthYear: state.birthYear, birthMonth: state.birthMonth, birthDay: state.birthDay }}>次へ進む</Link></button>
      </div>
    </>
    
  )
}

export default Basic;
