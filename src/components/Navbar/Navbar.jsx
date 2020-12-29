import React from "react";
import styles from "./Navbar.module.scss";

import Button from "../Button";

const Navbar = () => {
  return (
    <section className={styles.Navbar}>
      <h1>Bristol Bears Team Selector</h1>
      <Button btnText="Log in" />
      <Button btnText="Submit" />
    </section>
  );
};

export default Navbar;
