import React, { useRef, useState, useEffect } from "react";
import {setYear, setMonth, setDay} from "./definition";

export const BirthDate = ({ dataYears }) => {
  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  const selectBirthYear = (e) => {
    setBirthYear(e.target.value);
  }

  const selectBirthMonth = (e) => {
    setBirthMonth(e.target.value);
  }

  const selectBirthDay = (e) => {
    setBirthDay(e.target.value);
  }

  useEffect(() => {
    setYear();
    setMonth();
    setDay();
  }, []);

  return (
    <div>
      <p>-生年月日-</p>
      <label>
        <select ref={birthYearRef} value={birthYear} onChange={selectBirthYear}>
          { 
          dataYears.map((option, key) => (
            <option value={`${option.year}` `${option.japaneseCalendar}`} key={key}>{`${option.year}` `${option.japaneseCalendar}`}</option>
          ))
          }
        </select>年
      </label>
      <label>
        <select ref={birthMonthRef} value={birthMonth} onChange={selectBirthMonth}></select>月
      </label>
      <label>
        <select ref={birthDayRef} value={birthDay} onChange={selectBirthDay}></select>日
      </label>
    </div>
  )
}