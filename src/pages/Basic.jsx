import React, { useReducer, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gender } from "../components/Gender";
import { BirthDate } from "../components/BirthDate";

import reducer from '../reducers'

export const Basic = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const location = useLocation();
  const basicState = location.state;

  console.log(state)

  useEffect(() => {
    dispatch({
      type: 'BASIC_ANSWERS',
      gender: state.gender,
    })
  }, [])

  return (
    <>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>
      {basicState.gender}

      <Gender />
      <BirthDate />
      <br />
      <div>
        <button><Link to={{pathname: "/question"}}>次へ進む</Link></button>
      </div>
    </>
    
  )
}

export default Basic;
