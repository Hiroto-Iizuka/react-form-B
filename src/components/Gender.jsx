import React from "react";

export const Gender = ({ gender, setGender }) => {

  const handleChange = (e) => {
    setGender(e.target.value);
  }

  return (
    <div>
      <p>-性別-</p>
      <label>
        <input type="radio" value="男性" onChange={handleChange} checked={gender === "男性"} />
        男性
      </label>
      <label>
        <input type="radio" value="女性" onChange={handleChange} checked={gender === "女性"} />
        女性
      </label>
    </div>
  );
};