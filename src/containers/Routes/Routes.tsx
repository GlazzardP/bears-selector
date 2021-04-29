import React, { useEffect, useState } from "react";
import styles from "./Routes.module.scss";
import Navbar from "../../components/Navbar";

import SelectTeamPage from "../../pages/SelectTeamPage"
import * as firebase from 'firebase/app';
import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
import provider from "../../firebase";


// import { Router, Redirect, Switch, Route, Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

const Routes: React.FC = ({}) => {
  const [user, setUser] = useState<any>(null);


  const signIn = (provider: any) => { 
    firebase.auth().onAuthStateChanged(provider)
  }

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // redirectTo("/landing-page");
        setUser(null);
      }
    });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch((error) => {
        alert("Oh no an error :(");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (


    <Router>
    <Navbar signIn={signIn} signOut={signOut} />

     {/* <Link to="/"> */}
        <SelectTeamPage />
     {/* </Link> */}
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/dashboard">

          </Route>
        </Switch> */}
    </Router>   
  );
};

export default Routes;
