import React, { Component } from "react";
// import { Route } from "react-router-dom";
import firebase, { db, storage } from "../firebase";

import "../styles/profile.scss";
import Header from "../components/header";
import Footer from "../components/footer";


class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      feti: "",
      picture: "./defaultUser.png"
    };

    this.handleDataUpdate = this.handleDataUpdate.bind(this);
    // 画像ファイル取得用
    this.fileInput = React.createRef();
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
          feti: doc.data().feti
        });
      });
    });

    // cloud functions 画像の保存をトリガーにfirestore更新する関数を書く
    // わからんので後回し
  

  }

  handleDataUpdate(name, age, feti) {
    firebase.auth().onAuthStateChanged( user => { 
      // プロフ変更処理
      db
      .collection("users")
      .doc(`${user.uid}`)
      .set({ name: name, age: age, feti: feti},{merge: true})
      .then(() => {alert("sucsessfully updated")})
      .catch(() => {alert("update faled")});

      // 画像保存の処理を記述

      

      let picturePath = this.state.picture.replace(/C:\\fakepath\\/, `${user.uid}/`);
      alert(picturePath);
      storage
      .ref()
      .child(picturePath)
      .put(this.fileInput.current.files[0])
      .then(() => {
        alert("画像の保存完了");
      }).catch((error) => {
        alert(error);
      });
     
    });
  }

  


  render() {
    return(
      <div className="prf-cont">
        <Header />
        <div className="prf-main-cont">
          <div className="user-profile">
            <div className="upload-img-cont">
              <img className="upload-img-preload" src={this.state.picture} alt="profile-picture" />
              <input
              className="upload-ing-form"
              type="file"
              ref={this.fileInput}
              onChange={(e) => this.setState({picture: e.target.value})} />
            </div>
            <form>
              <h1><label>ユーザーネーム</label></h1>
              <input 
              className="edit-form"
              type="text" name="name"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
              />
              <h1><label>年齢</label></h1>
              <input
              className="edit-form"
              type="number" name="age"
              value={this.state.age}
              onChange={(e) => this.setState({age: e.target.value})}
              />
              <h1><label>性癖</label></h1>
              <input 
              className="edit-form"
              type="text" name="feti"
              value={this.state.feti}
              onChange={(e) => this.setState({feti: e.target.value})}
              />
              <div className="profile-edit-btn-cont">
                <button className="profile-edit-btn"
                type="button"
                onClick={() => {this.handleDataUpdate(this.state.name, this.state.age, this.state.feti)}}>
                  <p className="profile-edit-txt">更新する</p>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProfileEdit;