import { FunctionComponent } from "react";
import styles from "./SelectedPlayers.module.scss";

import close from "../../assets/images/Icons/cancel.svg";
import { IPlayer } from "../../data/data";

// import IPlayer from "../../data/data";

interface ISelectedPlayerProps {
  currentTeam: IPlayer[];
  // addPlayerToTeam: () => any;
}

const SelectedPlayer: FunctionComponent<ISelectedPlayerProps> = ({
  currentTeam,
}) => {
  return (
    <>
      {currentTeam.map((playerObj) => {
        return (
          <div className={styles.SelectedPlayer}>
            <img src={close} alt="Unselect Player" />
            <p>
              {playerObj.positionNum}
              {playerObj.playerName}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default SelectedPlayer;
