import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";


import InstructionModal from "../../containers/InstructionModal";

import Button from "../Button";
import CancelSvg from "../../assets/images/Icons/cancel.svg"
import { provider } from "../../firebase";
// firestore
import firebase from "../../firebase"

interface NavbarProps { 
  signIn(provider: any): any;
  // setPlayer: (player: IPlayer) => void;
  signOut(): any;

}

const Navbar: React.FC<NavbarProps> = ({signIn, signOut}) => {
  const [instrutionModal, toggleInstructionModal] =useState<boolean>(false);
  // const [user, setUser] = useState<any>(null);


    // Authentication
    // const signIn = () => {
    //   firebase.auth().signInWithRedirect(provider);

    // };
  
    // const getUser = () => {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       setUser(user);
    //     } else {
    //       // redirectTo("/landing-page");
    //       setUser(null);
    //     }
    //   });
    // };
  
    // const signOut = () => {
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       setUser(null);
    //       alert("You have signed out");
    //     })
    //     .catch((error) => {
    //       alert("Oh no an error :(");
    //     });
    // };
  
    // useEffect(() => {
    //   getUser();
    // }, []);

  return (
    <section className={styles.Navbar}>
      <h1>Bristol Bears Team Selector</h1>
      <div>
        <Button 
        // btnImg={CancelSvg}
         btnText="Log in" 
          handleClick={() => signIn(provider)} />
        {/* handleClick={() => alert("logged in")} /> */}
      <div> 
      <hr className={styles.navHR}/></div>
        <Button 
        // btnImg={CancelSvg}
         btnText="Instructions" 
         handleClick={() => {toggleInstructionModal(true)}} />
        {/* //  handleClick={() => alert("Here are you instructions: 1. Log in. This means you can submit your team. 2. Pick your best Bears. 3. Submit 4. Check out who's been picked the most & share your tam with your mates.")} /> */}

         {instrutionModal ? ( 
            <InstructionModal toggleInstructionModal={toggleInstructionModal} instructionModal={instrutionModal} />
         ) : null}
      </div>

    </section>
  );
};

export default Navbar;
