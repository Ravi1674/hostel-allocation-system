import React, { Component } from "react";
import logo from "../Newton_School.png";
import "../App.css";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Redirect } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
  authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com",
});

class Header extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.isSignedIn ? (
            <header className="">
              <img
                src={logo}
                style={{ float: "left", marginLeft: "60px" }}
                height="80px"
                alt="logo"
              />

              <div className="rightNav">
                <div style={{ display: "inline-block" }}>
                  <div style={{marginTop: '10px'}}>
                    <img
                      alt="profile picture"
                      width="30px"
                      height="30px"
                      src={firebase.auth().currentUser.photoURL}
                    />
                  </div>
                  <div> {firebase.auth().currentUser.displayName}</div>
                </div>
                <div
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  <button style={{margin: '0px 20px 30px 20px'}} onClick={() => firebase.auth().signOut()}>
                    Sign out!
                  </button>
                </div>
              </div>
            <Redirect to="/selecthostel" />
            </header>
          ) : (
            <div className="App">
              <header className="">
                <img src={logo} height="80px" alt="logo" />
                <h3>Hostel Allocation</h3>
                <p>Sign In</p>
              </header>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
        </div>
        <hr />
      </>
    );
  }
}

export default Header;
