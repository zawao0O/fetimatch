import React, { Component } from "react";
// import { Route } from "react-router-dom";
import firebase, { db } from "../firebase";

import "../styles/profile.scss";
import Header from "../components/header";
import Footer from "../components/footer";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ゲスト",
      age: 23,
      feti: "ノーマル",
      user: null
    };
  }

  componentDidMount() {
    // uidからユーザー取得
    firebase.auth().onAuthStateChanged( user => {
      db
      .collection("users")
      .doc(`${user.uid}`)
      .get()
      .then( doc => {
        this.setState({
          name: doc.data().name,
          age: doc.data().age,
          feti: doc.data().category
        });
      });
    });
  }


  render() {
    return(
      <div className="prf-cont">
        <Header />
        <div className="prf-main-cont">
          <div className="user-profile">
            <div className="prf-img-cont">
              <img src="./logo192.png" alt="profile-picture" />
            </div>
            <h1><label>ユーザーネーム</label></h1>
            <h3>{this.state.name}</h3>
            <h1><label>年齢</label></h1>
            <h3>{this.state.age}</h3>
            <h1><label>性癖</label></h1>
            <h3>{this.state.feti}</h3>
          </div>
          <div className="edit-btn-cont">
            <button className="edit-button" onClick={() => {this.props.history.push("/profileEdit")}}>
              <p className="edit-btn-txt">編集する</p>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;