import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Gender } from "../components/Gender";
import { BirthDate } from "../components/BirthDate";

import reducer from '../reducers'

export const Basic = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [gender, setGender] = useState("男性");

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  const answerBasic = (e) => {
    dispatch({
      type: 'BASIC_ANSWERS',
      gender,
      birthYear,
      birthMonth,
      birthDay,
    });
    setGender('');
    setBirthYear('');
    setBirthMonth('');
    setBirthDay('');
    // state確認用
    console.log(state)
  }

  return (
    <>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>
      {state.gender}
      {`${state.birthYear}年${state.birthMonth}月${state.birthDay}日`}

      <Gender gender={gender} setGender={setGender} />
      <BirthDate birthYear={birthYear} setBirthYear={setBirthYear} birthMonth={birthMonth} setBirthMonth={setBirthMonth} birthDay={birthDay} setBirthDay={setBirthDay} />
      <br />
      <button onClick={answerBasic}>更新</button>
      <div>
        <button onClick={answerBasic}><Link to={{pathname: "/confirmation", state: { gender: gender, birthYear: birthYear, birthMonth: birthMonth, birthDay: birthDay} }} >次へ進む</Link></button>
      </div>
    </>
    
  )
}

export default Basic;
