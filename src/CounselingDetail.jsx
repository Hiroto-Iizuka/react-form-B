import { Link } from "react-router-dom";

export const CounselingDetail = () => {
  return (
    <>
      <div>
        <p>STEP3</p>
        <p>ご相談内容をご記入ください</p>
      </div>

      <div>
        <p>-ご相談内容-</p>
        <textarea></textarea>
      </div>
      <br />
      <div>
        <button><Link to="/enquete">前へ戻る</Link></button>
        <button><Link to="/">次へ進む</Link></button>
      </div>
    </>
  )
}