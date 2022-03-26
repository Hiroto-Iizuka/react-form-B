
import { Link } from "react-router-dom";
import { Provider } from 'react-redux';
import createStore from './createStore';

export const store = createStore();

export const Confirmation = (store) => {
  return (
    <>
      <Provider store={store}>
        <p>STEP4</p>
        <p>以下の内容をご確認ください</p>
        <div>
          <p>-性別-</p>
          <p>{store.gender}</p>
          <p>-生年月日-</p>
          <p>{store.year}年{store.month}月{store.day}日</p>
          <p>-現在、生命保険に加入されていますか-</p>
          <p>{store.question1}</p>
          <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <p>{store.question2}</p>
          <p>-過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-</p>
          <p>{store.question3}</p>
          <p>-ご相談内容-</p>
          <p>{store.counseling_detail}</p>
        </div>
      </Provider>
      <br />
      <div>
        <button><Link to="/counselingdetail">前へ戻る</Link></button>
        <button><Link to="">次へ進む</Link></button>
      </div>
    </>
    
  )
}