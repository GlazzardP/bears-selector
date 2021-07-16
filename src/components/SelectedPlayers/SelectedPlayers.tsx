// import { FunctionComponent, useEffect } from "react";
import styles from "./SelectedPlayers.module.scss";

import close from "../../assets/images/Icons/cancel.svg";
import players, { IPlayer } from "../../data/data";
// import { ListFormat } from "typescript";

// import IPlayer from "../../data/data";

interface ISelectedPlayerProps {
  currentTeam: IPlayer[];
  onClick: any;
}


const SelectedPlayer: React.FC<ISelectedPlayerProps> = ({ currentTeam }) => {


  const getSurname = (playerObj: IPlayer)  => { 
    const surname = playerObj.playerName.split(" ")[1]
    return surname
  }

  return (
    <section className={styles.selectedTeam}>
      {/* {printSelectedPlayers()} */}
      {currentTeam.map((playerObj) => {
        return (
          <div className={styles.SelectedPlayer} key={playerObj.playerName}>
            {/* <img src={close} alt="Unselect Player" /> */}
            <p>{playerObj.positionNum[0]}</p>

            <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(playerObj)}`}</p>

          </div>
        );
      })}
    </section>
  );
};

export default SelectedPlayer;
