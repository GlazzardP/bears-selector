import React from "react";
import styles from "./Routes.module.scss";
import Navbar from "../../components/Navbar";

import SelectTeamPage from "../../pages/SelectTeamPage"
import * as firebase from 'firebase/app';
import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
import provider from "../../firebase";


// import { Router, Redirect, Switch, Route, Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Routes: React.FC = ({}) => {

  const signIn = (provider: any) => { 
    firebase.auth().onAuthStateChanged(provider)
  }

// const Routes = () => {
  return (
    // <section className={styles.Routes}>


    <Router>
    <Navbar signIn={signIn} />

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
  // </section>
  );
};

export default Routes;
