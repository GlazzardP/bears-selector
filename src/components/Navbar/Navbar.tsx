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
      <Button btnImg={CancelSvg} btnText="Log in" handleClick={signIn} />
      {/* <Button btnText="Submit" /> */}
    </section>
  );
};

export default Navbar;
