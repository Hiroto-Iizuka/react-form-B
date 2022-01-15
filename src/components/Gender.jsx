import React, { useState } from "react";

export const Gender = () => {
  const [radioButton, setRadioButton] = useState("male");

  const handleChange = (e) => {
    setRadioButton(e.target.value);
  }

  return (
    <div>
      <p>-性別-</p>
      <label>
        <input type="radio" value="male" onChange={handleChange} checked={radioButton === "male"} />
        男性
      </label>
      <label>
        <input type="radio" value="female" onChange={handleChange} checked={radioButton === "female"} />
        女性
      </label>
    </div>
  );
};