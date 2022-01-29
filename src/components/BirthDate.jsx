import React, { useRef, useState, useEffect } from "react";
// import {dataYears} from "./definition";
import {years} from "./definition";
// import {setYears, setMonths, setDays} from "./definition";

export const BirthDate = () => {
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


  // useEffect(() => {
  //   setYears();
  //   setMonths();
  //   setDays();
  // }, []);

  return (
    <div>
      <p>-生年月日-</p>
      <label>
        <select ref={birthYearRef} value={birthYear} onChange={selectBirthYear}>
          {  
            years.map((val) => 
            <option value={`${val["year"]}` `${val["japaneseCalender"]}`}>{`${val["year"]}` `${val["japaneseCalender"]}`}</option>
          )}          
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