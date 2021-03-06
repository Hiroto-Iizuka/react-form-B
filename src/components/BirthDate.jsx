import React, { useRef } from "react";
import { years, months, days } from "./definition";

export const BirthDate = ({state, dispatch}) => {

  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const selectBirthYear = (e) => {
    dispatch({
      type: 'BIRTHYEAR_ANSWER',
      birthYear: e.target.value
    });
  };

  const selectBirthMonth = (e) => {
    dispatch({
      type: 'BIRTHMONTH_ANSWER',
      birthMonth: e.target.value  
    });
  };

  const selectBirthDay = (e) => {
    dispatch({
      type: 'BIRTHDAY_ANSWER',
      birthDay: e.target.value  
    });
  };

  return (
    <div>
      <p>-生年月日-</p>
      <label>
        <select ref={birthYearRef} value={state.birthYear} onChange={selectBirthYear}>
          {years.map((year, index) =>
            (<option key={index} value={year.year}>{year.year}（{year.japaneseCalender}）</option>)
          )}
        </select>年
      </label>
      <label>
        <select ref={birthMonthRef} value={state.birthMonth} onChange={selectBirthMonth}>
          {months.map((month, index) =>
            (<option key={index} value={month}>{month}</option>)
          )}
        </select>月
      </label>
      <label>
        <select ref={birthDayRef} value={state.birthDay} onChange={selectBirthDay}>
          {days.map((day, index) =>
            (<option key={index} value={day}>{day}</option>)
          )}
        </select>日
      </label>
    </div>
  )
}