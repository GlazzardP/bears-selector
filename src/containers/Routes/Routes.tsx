import React, { useEffect, useState } from "react";
// import styles from "./Routes.module.scss";
import firebase, { provider, firestore } from "../../firebase";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

import Navbar from "../../components/Navbar";
import SelectTeamPage from "../SelectTeamPage"

import { IPlayer } from "../../data/data";


const Routes: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);

  const signIn = (provider: any) => { 
    // firebase.auth().onAuthStateChanged(provider)
    firebase.auth().signInWithRedirect(provider);
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


  // Database
  const addToDb = () => {
    if (user) {
      firestore
        .collection("team")
        .doc(user.uid)
        .set({ currentTeam })
        .catch((err) => {
          console.log(err);
        });
      console.log("Submitted");
    } else {
      alert("You are not logged in. Please log in to submit team.");
    }
  };


  return (

    <Router>
    <Navbar signIn={signIn} signOut={signOut} user={user} />

     {/* <Link to="/"> */}
        <SelectTeamPage 
        currentTeam={currentTeam} addPlayerToTeam={addPlayerToTeam} addToDb={addToDb} user={user}
         />
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
