import React from "react";

export const Question3 = ({ questionAnswer3, setQuestionAnswer3 }) => {

  const answerQuestion = (e) => {
    setQuestionAnswer3(e.target.value);
  }

  return (
    <>
      <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <label>
        <input type="radio" value="はい" onChange={answerQuestion} checked={questionAnswer3 === "はい"} />
        はい
      </label>
      <label>
        <input type="radio" value="いいえ" onChange={answerQuestion} checked={questionAnswer3 === "いいえ"} />
        いいえ
      </label>
    </>
  )
}