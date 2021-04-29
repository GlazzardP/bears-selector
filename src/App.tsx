import React, {useEffect}from "react";
// import firebase from "./firebase";

// import * as firebase from 'firebase/app';
// import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
// import provider from "./firebase";

import firebase, {provider} from "./firebase"

import styles from "./App.module.scss";

// Containers 
import Routes from "./containers/Routes"


function App() {

  // const signIn = (provider: any) => { 
  //   firebase.auth().onAuthStateChanged(provider)
  // }

  // const getUser = () => { 
  //   firebase.auth().onAuthStateChanged((user) => { 
  //     if (user) { 
  //       setUser(user);
  //     } else { 
  //       setUser(null)
  //     }
  //   })
  // }

  // useEffect(() => { 
  //   getUser()
  // }, [])


  return (
    <Routes />
  );
}

export default App;
