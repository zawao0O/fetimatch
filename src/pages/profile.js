import React, { Component } from "react";
// import { Route } from "react-router-dom";
import firebase, { db, storage } from "../firebase";
// import { storage } from "../firebase";

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
      user: null,
      picture: "./defaultUser.png",
      pictureDownloadPath: null
    };
  }

  async componentDidMount() {
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
          feti: doc.data().feti,
          pictureDownloadPath: doc.data().profilePicture
        });
        storage.ref(this.state.pictureDownloadPath).getDownloadURL()
        .then((url) => {
          this.setState({
            picture: url
          });
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
              <img className="prf-img" src={this.state.picture} alt="profile-picture" />
            </div>
            <h1><label>ユーザーネーム</label></h1>
            <h2>{this.state.name}</h2>
            <h1><label>年齢</label></h1>
            <h2>{this.state.age}</h2>
            <h1><label>性癖</label></h1>
            <h2>{this.state.feti}</h2>
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