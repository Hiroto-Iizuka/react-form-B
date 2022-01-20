import React, { useState } from "react";

export const Question3 = () => {
  const [questionAnswer, setQuestionAnswer] = useState();

  const answerQuestion = (e) => {
    setQuestionAnswer(e.target.value);
  }

  return (
    <>
      <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <label>
        <input type="radio" value="yes" onChange={answerQuestion} checked={questionAnswer === "yes"} />
        はい
      </label>
      <label>
        <input type="radio" value="no" onChange={answerQuestion} checked={questionAnswer === "no"} />
        いいえ
      </label>
    </>
  )
}