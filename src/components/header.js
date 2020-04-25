import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./componentStyles/header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <header className="header">
          <div className="header-logo-cont">
          <h1 className="header-app-logo">ふぇちマッチ</h1>
          </div>
          <div className="header-menu-cont">
            <h2 className="header-menu" onClick={() => {this.props.history.push("/profile")}}>プロフィール</h2>
          </div>
      </header>
    );
  }
}

export default withRouter(Header);