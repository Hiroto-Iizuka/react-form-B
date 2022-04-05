import React, { useState } from "react";

export const Gender = () => {
  const [radioButton, setRadioButton] = useState("男性");

  const handleChange = (e) => {
    setRadioButton(e.target.value);
  }

  return (
    <div>
      <p>-性別-</p>
      <label>
        <input type="radio" value="男性" onChange={handleChange} checked={radioButton === "男性"} />
        男性
      </label>
      <label>
        <input type="radio" value="女性" onChange={handleChange} checked={radioButton === "女性"} />
        女性
      </label>
    </div>
  );
};