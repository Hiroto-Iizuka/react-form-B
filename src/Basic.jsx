import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Gender } from "./components/Gender";
import { BirthDate } from "./components/BirthDate";
import { Confirmation } from "./Confirmation";

export const Basic = () => {

  return (
    <>
      <p>STEP1</p>
      <p>お客様の情報を入力してください</p>

      <Gender />
      <BirthDate />
      <br />
      <div>
        <button><Link to="/question">次へ進む</Link></button>
      </div>
    </>
    
  )
}

export default Confirmation