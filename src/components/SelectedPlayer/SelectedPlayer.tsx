import React from "react";
import styles from "./SelectedPlayer.module.scss";

import close from "../../assets/images/Icons/cancel.svg"


interface SelectedPlayerProps { 
  playerObj: string;
}

const SelectedPlayer = () => {
  return (
    <div className={styles.SelectedPlayer}>
    <img src={close} alt="Unselect Player" />
    <p>6. S. Luatua</p>
    </div>
  );
};

export default SelectedPlayer;
