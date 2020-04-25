import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import firebase from "../firebase";

import TimeLine from "../pages/timeLine";
import Profile from "../pages/profile";
import "../styles/defaultRoute.scss";
import Header from "../components/header";

// ログイン後に遷移してくるルート
class DefaultRoute extends Component {
  constructor(props) {
    super(props); 
    
  }


  render() {
    return(
      <div className="default-route-container">
        <Header />
        <main className="main">
            <Route exact path="/defaultRoute" component={ TimeLine } />
            <Route path="/profile" component={ Profile } />
        </main>
        <footer className="footer">
          <p className="footer-text">producted by zzZ</p>
        </footer>
      </div>
    );
  }
}

export default DefaultRoute;