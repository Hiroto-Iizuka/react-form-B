import { Link } from "react-router-dom";
import { Gender } from "./components/Gender";
import { BirthDate } from "./components/BirthDate";

export const Basic = () => {

  return (
    <>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>

      <Gender />
      <BirthDate />

      <div>
        <button><Link to="/">次へ進む</Link></button>
      </div>
    </>
    
  )
}