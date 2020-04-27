import React, { Component } from "react";
// import { Route } from "react-router-dom";
import firebase, { db } from "../firebase";

import "../styles/profile.scss";
import Header from "../components/header";
import Footer from "../components/footer";


class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      feti: ""
    };

    this.handleDataUpdate = this.handleDataUpdate.bind(this);
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

  handleDataUpdate(name, age, feti) {
    firebase.auth().onAuthStateChanged( user => { 
      db
      .collection("users")
      .doc(`${user.uid}`)
      .set({ name: name, age: age, category: feti},{merge: true})
      .then(() => {alert("sucsessfully updated")})
      .catch(() => {alert("update faled")});
    });
  }

  


  render() {
    return(
      <div className="prf-cont">
        <Header />
        <div className="prf-main-cont">
          <div className="user-profile">
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