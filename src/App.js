import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserBook from "./pages/UserBook";
import SelectHostel from "./pages/SelectHostel";
import SelectHostelWing from "./pages/SelectHostelWing";
import SelectHostelFloor from "./pages/SelectHostelFloor";

class App extends Component {
  // name = firebase.auth().currentUser.displayName;
  render() {
    return (
      <>
        <BrowserRouter>
        <Route path="/">
              <Header/>
            </Route>
          <Switch>
            
            <Route exact path="/userbook">
              <UserBook />
            </Route>
            <Route exact path="/selecthostel">
              <SelectHostel />
            </Route>
            <Route exact path="/selecthostel-wing/:gender">
              <SelectHostelWing />
            </Route>
            <Route exact path="/selecthostel-floor/:floorNo">
              <SelectHostelFloor />
            </Route>
            
          </Switch>
          <Route path="/userbook">
              <UserBook />
          </Route>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
