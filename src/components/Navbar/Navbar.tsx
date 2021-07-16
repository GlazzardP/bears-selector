import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { provider } from "../../firebase";


import InstructionModal from "../../containers/InstructionModal";
import Button from "../Button";
// import SignInPage from "../../containers/SignInPage";
import StatsPage from "../../containers/StatsPage";

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

interface NavbarProps { 
  signIn(provider: any): any;
  // setPlayer: (player: IPlayer) => void;
  signOut(): any;
  user: any;
  setLoginPage(any): any;
  // provider: any;
  // setPitchPage(): any;
}

const Navbar: React.FC<NavbarProps> = ({signIn, signOut, user, setLoginPage}) => {
  const [instrutionModal, toggleInstructionModal] =useState<boolean>(false);


  const signInOutJsx = user ? (
    <div className={styles.authButtons}>
      <Button btnText="Log out" handleClick={() => signOut()} />    
    </div>
  ) : (
    <div className={styles.authButtons}>
        {/* <Button btnText="Log in" handleClick={() => signIn(provider)} /> */}
        <Button btnText="Log In" handleClick={() => setLoginPage(true)} />
    </div>
  );
  

  return (
    <section className={styles.Navbar}>
      <h1>Bristol Bears Team Selector</h1>
      {/* <Link to="stats">
        <StatsPage />
      </Link> */}
      <div>
        {signInOutJsx}
      <div> 
      <hr className={styles.navHR}/></div>
        <Button 
         btnText="Instructions" 
         handleClick={() => {toggleInstructionModal(true)}} />

         {instrutionModal ? ( 
            <InstructionModal toggleInstructionModal={toggleInstructionModal} instructionModal={instrutionModal} />
         ) : null}
         


    
      </div>

    </section>
  );
};

export default Navbar;
