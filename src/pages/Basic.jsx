import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Gender } from "../components/Gender";
import { BirthDate } from "../components/BirthDate";

export const Basic = () => {
  const [gender, setGender] = useState("男性");

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  return (
    <>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>

      <Gender gender={gender} setGender={setGender} />
      <BirthDate birthYear={birthYear} setBirthYear={setBirthYear} birthMonth={birthMonth} setBirthMonth={setBirthMonth} birthDay={birthDay} setBirthDay={setBirthDay} />
      <br />
      <div>
        <button><Link to="/question">次へ進む</Link></button>
      </div>
    </>
    
  )
}