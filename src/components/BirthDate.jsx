import React, { useRef, useState, useEffect } from "react"; 

export const BirthDate = () => {
  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  const setYear = () => {
    for (let i = 1920; i <= new Date().getFullYear(); i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      if (birthYearRef.current) birthYearRef.current.appendChild(option);
    }
    birthYearRef.current.value = birthYear;
  }

  const setMonth = () => {
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      if (birthMonthRef.current) birthMonthRef.current.appendChild(option);
    }
    if (birthMonthRef.current) birthMonthRef.current.value = birthMonth;
  }

  const setDay = () => {
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      if (birthDayRef.current) birthDayRef.current.appendChild(option);
    }
    if (birthDayRef.current) birthDayRef.current.value = birthDay;
  }

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

  useEffect(() => {
  }, [birthYear, birthMonth]);


  return (
    <div>
      <p>-生年月日-</p>
      <label>
        <select ref={birthYearRef} value={birthYear} onChange={selectBirthYear}></select>年
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