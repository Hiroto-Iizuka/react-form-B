
import { Link } from "react-router-dom";
import { store } from "./App";

export const Confirmation = () => {
  return (
    <>
      {console.log(store.getState())}
      {console.log(store.getState().basic.gender)}
      <p>STEP4</p>
      <p>以下の内容をご確認ください</p>
      <div>
        <p>-性別-</p>
        <p>{store.getState().basic.gender}</p>
        <p>-生年月日-</p>
        <p>{store.getState().basic.birthYear}年{store.getState().basic.birthMonth}月{store.getState().basic.birthDay}日</p>
        <p>-現在、生命保険に加入されていますか-</p>
        <p>{store.getState().question.question1}</p>
        <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
        <p>{store.getState().question.question2}</p>
        <p>-過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-</p>
        <p>{store.getState().question.question3}</p>
        <p>-ご相談内容-</p>
        <p>{store.getState.couseling_detail.counseling_detail}</p>
      </div>
      <br />
      <div>
        <button><Link to="/counselingdetail">前へ戻る</Link></button>
        <button><Link to="">次へ進む</Link></button>
      </div>
    </>
    
  )
}