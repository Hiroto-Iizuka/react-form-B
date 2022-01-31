import React, { useRef, useState } from "react";
import { years, months, days } from "./definition";

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

  return (
    <div>
      <p>-生年月日-</p>
      <label>
        <select ref={birthYearRef} value={birthYear} onChange={selectBirthYear}>
          {years.map((year) =>
            (<option value={year.year}>{year.year}（{year.japaneseCalender}）</option>)
          )}
        </select>年
      </label>
      <label>
        <select ref={birthMonthRef} value={birthMonth} onChange={selectBirthMonth}>
          {months.map((month) =>
            (<option value={month}>{month}</option>)
          )}
        </select>月
      </label>
      <label>
        <select ref={birthDayRef} value={birthDay} onChange={selectBirthDay}>
          {days.map((day) =>
            (<option value={day}>{day}</option>)
          )}
        </select>日
      </label>
    </div>
  )
}