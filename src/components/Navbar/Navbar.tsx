import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import firebase, { provider } from "../../firebase";


import InstructionModal from "../../containers/InstructionModal";
import Button from "../Button";
// import SignInPage from "../../containers/SignInPage";


interface NavbarProps { 
  signIn(provider: any): any;
  // setPlayer: (player: IPlayer) => void;
  signOut(): any;
  user: any;
  // provider: any;
}

const Navbar: React.FC<NavbarProps> = ({signIn, signOut, user}) => {
  const [instrutionModal, toggleInstructionModal] =useState<boolean>(false);


  const signInOutJsx = user ? (
    <div className={styles.authButtons}>
      <Button btnText="Log out" handleClick={() => signOut()} />    
    </div>
  ) : (
    <div className={styles.authButtons}>
        <Button btnText="Log in" handleClick={() => signIn(provider)} />
    </div>
  );

  console.log(user);
  

  return (
    <section className={styles.Navbar}>
      <h1>Bristol Bears Team Selector</h1>
      <div>
        {signInOutJsx}
      <div> 
      <hr className={styles.navHR}/></div>
        <Button 
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
