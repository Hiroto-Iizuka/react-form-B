import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <>
      <div>
        <p>STEP4</p>
        <p>以下の内容をご確認ください</p>
      </div>
      <div>
        <p>性別</p>
        <p>男性</p>
      </div>
      <div>
        <p>生年月日</p>
        <p>1992年1月1日</p>
      </div>
      <div>
        <p>現在、生命保険に加入されていますか？</p>
        <p>いいえ</p>
      </div>
      <div>
        <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <p>いいえ</p>
      </div>
      <div>
        <p>過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <p>いいえ</p>
      </div>
      <div>
        <p>ご相談内容</p>
        <p>困っています</p>
      </div>
      <br />
      <div>
        <button><Link to="/counselingdetail">前へ戻る</Link></button>
        <button><Link to="">送信</Link></button>
      </div>
    </>
  )
}