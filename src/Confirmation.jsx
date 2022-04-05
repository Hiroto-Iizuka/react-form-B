
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Confirmation = () => {
  const basic = useSelector((state) => state.basicReducer);
  return (
    <>
      
      <p>STEP4</p>
      <p>以下の内容をご確認ください</p>
      <div>
        <p>-性別-</p>
        <p>{basic.basic.gender}</p>
        <p>-生年月日-</p>
        <p>{basic.birth_year}年{basic.birth_month}月{basic.birth_day}日</p>
        <p>-現在、生命保険に加入されていますか-</p>
        <p></p>
        <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
        <p></p>
        <p>-過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-</p>
        <p></p>
        <p>-ご相談内容-</p>
        <p></p>
      </div>
      <br />
      <div>
        <button><Link to="/counselingdetail">前へ戻る</Link></button>
        <button><Link to="">次へ進む</Link></button>
      </div>
    </>
    
  )
}