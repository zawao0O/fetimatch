import React, { Component } from "react";
import firebase from "../firebase";

import "../styles/login.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
      }

    this.handleLogin = this.handleLogin.bind(this);
    

  }

  async handleLogin(email, password) {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("ログインしました");
      this.props.history.push({
        pathname: "/timeLine",
        state: {user: this.state.uid}
      });
    }).catch((error) => {
      alert(error);
    })
  }


  render() {
    return(
      <div className="container">
        <h1 className="login-text">ふぇちマッチ</h1>
        <form className="login-forms">
          <div className="txt-cont">
            <h3 className="labels">Eメールアドレス</h3>
          </div>
            <input
              className="login-input"
              type="text" name="email"
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})} />
          <div className="txt-cont">
          <h3 className="labels">パスワード</h3>
          </div>
            <input
              className="login-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}/>
            <button type="button" className="login-btn" onClick={ () => {this.handleLogin(this.state.email, this.state.password)}}>
              <p className="login-btn-txt">サインイン</p>
            </button>
            <p className="login-btn-txt">またはサインアップ</p>
        </form>
      </div>
    );
  }
}

export default Login;