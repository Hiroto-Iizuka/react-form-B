
import { Link, useSelecter } from "react-router-dom";

export const answersList = {
  // 各設問の回答を格納
}

export const Confirmation = (answerList) => {
  return (
    <>
      <p>STEP4</p>
      <p>以下の内容をご確認ください</p>
      <div>
        <p>-性別-</p>
        <p>{answerList.gender}</p>
        <p>-生年月日-</p>
        <p>{answerList.year}年{answerList.month}月{answerList.day}日</p>
        <p>-現在、生命保険に加入されていますか-</p>
        <p>{answerList.question1}</p>
        <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
        <p>{answerList.question2}</p>
        <p>-過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-</p>
        <p>{answerList.question3}</p>
        <p>-ご相談内容-</p>
        <p>{answerList.counseling_detail}</p>
      </div>
      <br />
      <div>
        <button><Link to="/counselingdetail">前へ戻る</Link></button>
        <button><Link to="">次へ進む</Link></button>
      </div>
    </>
    
  )
}