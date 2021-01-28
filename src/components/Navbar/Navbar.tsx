import React from "react";
import styles from "./Navbar.module.scss";

import Button from "../Button";
import CancelSvg from "../../assets/images/Icons/cancel.svg"

interface NavbarProps { 
  signIn(provider: any): any;
  // setPlayer: (player: IPlayer) => void;

}
// const CardFront: React.FC<CardFrontProps> = ({

const Navbar: React.FC<NavbarProps> = ({signIn}) => {
  return (
    <section className={styles.Navbar}>
      <h1>Bristol Bears Team Selector</h1>
      <Button 
      // btnImg={CancelSvg}
       btnText="Log in" 
       handleClick={signIn} />
       <hr/>
      <Button 
      // btnImg={CancelSvg}
       btnText="Instructions" 
       handleClick={() => alert("Here are you instructions: 1. Log in. This means you can submit your team. 2. Pick your best Bears. 3. Submit 4. Check out who's been picked the most & share your tam with your mates.")} />
    </section>
  );
};

export default Navbar;
