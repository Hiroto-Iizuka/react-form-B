import { Link } from "react-router-dom";
import React, { useState, useEffect, createElement } from "react";

export const Question = () => {
  const [question1Answer, setQuestion1Answer] = useState();
  const [question2Answer, setQuestion2Answer] = useState();
  const [question3Answer, setQuestion3Answer] = useState();

  // アンケートデータ
  const questions = [
    "現在、生命保険に加入されていますか？",
    "現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？",
    "過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？"
  ]

  const [question, setQuestion] = useState([
    
  ]);

  const displayQuestion1 = () => {
    const fragment = document.createDocumentFragment();
    const p = document.createElement('p');
    const label = document.createElement('label');
    const inputYes = document.createElement('input');
    const inputNo = document.createElement('input');
    inputYes.setAttribute('onClick', 'displayQuestion2');
    inputNo.setAttribute('onClick', 'displayQuestion2');
    fragment.append(p);
    p.append(questions[0]);
    label.append(inputYes);
    inputYes.append('はい');
    label.append(inputNo);
    inputNo.append('いいえ');
  }

  const answerQuestion1 = (e) => {
    setQuestion1Answer(e.target.value);
  }

  const answerQuestion2 = (e) => {
    setQuestion2Answer(e.target.value);
  }

  const answerQuestion3 = (e) => {
    setQuestion3Answer(e.target.value);
  }

  useEffect(() => {
    displayQuestion1();
  })

  return (
    <>
      <div>
        <p>STEP2</p>
        <p>以下にお答えください</p>
      </div>
      <div>
        <label>
          <input type="radio" value="yes" onChange={answerQuestion1} onClick={displayQuestion1} checked={question1Answer === "yes"} />
          はい
        </label>
        <label>
          <input type="radio" value="no" onChange={answerQuestion1} onClick={displayQuestion1} checked={question1Answer === "no"} />
          いいえ
        </label>

        <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label>
          <input type="radio" value="yes" onChange={answerQuestion2} checked={question2Answer === "yes"} />
          はい
        </label>
        <label>
          <input type="radio" value="no" onChange={answerQuestion2} checked={question2Answer === "no"} />
          いいえ
        </label>

        <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <label>
          <input type="radio" value="yes" onChange={answerQuestion3} checked={question3Answer === "yes"} />
          はい
        </label>
        <label>
          <input type="radio" value="no" onChange={answerQuestion3} checked={question3Answer === "no"} />
          いいえ
        </label>
      </div>
      <br />
      <div>
        <button><Link to="/">前へ戻る</Link></button>
        <button><Link to="/counselingdetail">次へ進む</Link></button>
      </div>
    </>
  )
}