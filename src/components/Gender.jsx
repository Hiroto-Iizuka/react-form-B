import React, { useReducer } from "react";

import reducer from '../reducers'

export const Gender = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const handleChange = (e) => {
    dispatch({
      type: 'GENDER_ANSWER',
      gender: e.target.value
    })
  }

  return (
    <div>
      <p>-性別-</p>
      <label>
        <input type="radio" value="男性" onChange={handleChange} checked={state.gender === "男性"} />
        男性
      </label>
      <label>
        <input type="radio" value="女性" onChange={handleChange} checked={state.gender === "女性"} />
        女性
      </label>
    </div>
  );
};