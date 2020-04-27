import React, { Component } from "react";
import firebase from "../firebase";

import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/timeLine.scss"

class TimeLine extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="timeline-cont">
        <Header />
        <div className="tl-container">
          <div className="timeline-scroll-li">
            <ul className="scroll-list-cont">
              <li>ユーザー１</li>
              <li>ユーザー２</li>
              <li>ユーザー３</li>
              <li>ユーザー４</li>
            </ul>
          </div>
          <div className="timeline-serch-form">
            <h2>セレクトチャット</h2>
            <form className="serch-partner-form">
              <h1>性別：</h1>
              <label >
                男性
                <input type="radio" value="男性" name="sex" />
              </label>
              <label>
                女性
                <input type="radio" value="女性" name="sex" />
              </label>
              <h1>年齢</h1>
              <label className="age-selector">
                <select name="age">
                  <option value="選択してください">選択してください</option>
                  <option value="20歳未満">20歳未満</option>
                  <option value="20-29歳">20-29歳</option>
                  <option value="30-39歳">30-39歳</option>
                  <option value="40-49歳">40-49歳</option>
                  <option value="50-59歳">50-59歳</option>
                </select>
              </label>
            </form>
            <div className="search-btn-cont">
              <button type="button" className="search-btn" onClick={() => {alert("検索中...")}}>
                <p className="search-btn-txt">検索する</p>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TimeLine;