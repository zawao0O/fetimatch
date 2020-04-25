import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 遷移先コンポーネント
import Login from "./pages/login";
import TimeLine from "./pages/timeLine";
import Profile from "./pages/profile";
import firebase from "../src/firebase";
import "./App.scss";

class App extends Component {

  render() {
    return(
      <div>
        <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={ Login } />
            <Route path="/timeLine" component={ TimeLine } />
            <Route path="/profile" component={ Profile } />
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}



export default App;
