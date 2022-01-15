import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Enquete = () => {
  const [enquete1Answer, setEnquete1Answer] = useState("no");
  const [enquete2Answer, setEnquete2Answer] = useState("no");
  const [enquete3Answer, setEnquete3Answer] = useState("no");


  const answerEnquete1 = (e) => {
    setEnquete1Answer(e.target.value);
  }

  const answerEnquete2 = (e) => {
    setEnquete2Answer(e.target.value);
  }

  const answerEnquete3 = (e) => {
    setEnquete3Answer(e.target.value);
  }

  return (
    <>
      <div>
        <p>STEP2</p>
        <p>以下にお答えください</p>
      </div>
      <div>
        <p>現在、生命保険に加入されていますか？</p>
        <label>
          <input type="radio" value="yes" onChange={answerEnquete1} checked={enquete1Answer === "yes"} />
          はい
        </label>
        <label>
          <input type="radio" value="no" onChange={answerEnquete1} checked={enquete1Answer === "no"} />
          いいえ
        </label>

        <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label>
          <input type="radio" value="yes" onChange={answerEnquete2} checked={enquete2Answer === "yes"} />
          はい
        </label>
        <label>
          <input type="radio" value="no" onChange={answerEnquete2} checked={enquete2Answer === "no"} />
          いいえ
        </label>

        <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <label>
          <input type="radio" value="yes" onChange={answerEnquete3} checked={enquete3Answer === "yes"} />
          はい
        </label>
        <label>
          <input type="radio" value="no" onChange={answerEnquete3} checked={enquete3Answer === "no"} />
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