import React, { Component } from "react";
// import { Route } from "react-router-dom";
import firebase from "../firebase";
import db from "../firebase";

import "../styles/profile.scss";
import Header from "../components/header";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ゲスト",
      age: 23,
      feti: "molesting"
    };

    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        let currentUser = firebase.auth().currentUser;
        this.state = {uid: toString(currentUser.uid)};
      } else {
        console.log("ユーザーがいません");
      }
    });

  }

  componentDidMount() {

    console.log(this.state.uid);


    // if(userData.exists) {
    //   console.log(userData.id);
    //   console.log(userData.data());
    // } else {
    //   console.log("no such collection");
    // }

    
  }


  render() {
    return(
      <div className="prf-cont">
        <Header />
        <div className="prf-main-cont">
          <div className="user-profile">
            <h1><label>ユーザーネーム</label></h1>
            <h3>{this.state.name}</h3>
            <h1><label>年齢</label></h1>
            <h3>{this.state.age}</h3>
            <h1><label>性癖</label></h1>
            <h3>{this.state.feti}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;