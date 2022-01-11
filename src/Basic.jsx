import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Basic = () => {
  const [radioButton, setRadioButton] = React.useState("male");

  const handleChange = (e) => {
    setRadioButton(e.target.value);
  }

  return (
    <div>
      <h1>お客様の情報を入力してください</h1>
      <p>-性別-</p>
      <label>
        <input type="radio" value="male" onChange={handleChange} checked={radioButton === "male"} />
        男性
      </label>
      <label>
        <input type="radio" value="female" onChange={handleChange} checked={radioButton === "female"} />
        女性
      </label>
      <p>-生年月日-</p>

      <button><Link to="/">次へ進む</Link></button>
    </div>
    
  )
}