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
import LoginPage from "../LoginPage";
import { IPlayer } from "../../data/data";
import { Stats } from "fs";
import StatsPage from "../StatsPage";


const Routes: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [pitchPage, setPitchPage] = useState<boolean>(true);
  const [loginPage, setLoginPage] = useState<boolean>(false);
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
        .catch((err: any) => {
          console.log(err);
        });
      console.log("Submitted");
    } else {
      alert("You are not logged in. Please log in to submit team.");
    }
  };

  console.log(loginPage);
  
const fun = () => { 
  {
    if (loginPage === true) { 
        return ( 
          <LoginPage signIn={signIn} signOut={signOut} user={user} setLoginPage={setLoginPage} />
        )
      } else if (pitchPage === true) { 
        return (
          <SelectTeamPage currentTeam={currentTeam} addPlayerToTeam={addPlayerToTeam} addToDb={addToDb} user={user}/>
        )
      } else { 
        return ( 
          <StatsPage />
        )
      }
    }
}

  return (

    <Router>
    <Navbar signIn={signIn} signOut={signOut} user={user} setLoginPage={setLoginPage}/>

    {
      fun()
    }
    {/* {
      pitchPage ? (<SelectTeamPage currentTeam={currentTeam} addPlayerToTeam={addPlayerToTeam} addToDb={addToDb} user={user}/>) : (<StatsPage />)
    } */}

    </Router>   
  );
};

export default Routes;
