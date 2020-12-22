import { FunctionComponent, useEffect } from "react";
import styles from "./SelectedPlayers.module.scss";

import close from "../../assets/images/Icons/cancel.svg";
import { IPlayer } from "../../data/data";
import { ListFormat } from "typescript";

// import IPlayer from "../../data/data";

interface ISelectedPlayerProps {
  currentTeam: IPlayer[];
  onClick: any;
  // unselectPlayer: (currentTeam: IPlayer[]) => IPlayer[];
  // player: IPlayer;

  // addPlayerToTeam: () => any;
}

// const SelectedPlayer: FunctionComponent<ISelectedPlayerProps> = ({
// currentTeam,
// }) => {

const SelectedPlayer: React.FC<ISelectedPlayerProps> = ({
  currentTeam,
  // unselectPlayer,
}) => {
  // const printSelectedPlayers = () => {
  //   currentTeam.map((playerObj) => {
  //     console.log(playerObj.playerName);

  //     if (playerObj.playerName === "") {
  //       return "";
  //     } else if (playerObj.playerName !== "") {
  //       return (
  //         <div className={styles.SelectedPlayer}>
  //           <img src={close} alt="Unselect Player" />
  //           <p>
  //             {playerObj.positionNum}
  //             {playerObj.playerName}
  //           </p>
  //         </div>
  //       );
  //     }
  //   });
  // };

  // const printSelectedPlayers = () => {
  //   currentTeam.map((playerObj) => {
  //     // console.log(playerObj.playerName);

  //     if (playerObj.playerName !== "") {
  //       return "";
  //     } else if (playerObj.playerName === "") {
  //       return (
  //         <div className={styles.SelectedPlayer}>
  //           <img src={close} alt="Unselect Player" />
  //           <p>
  //             {playerObj.positionNum}
  //             {playerObj.playerName}
  //           </p>
  //         </div>
  //       );
  //     }
  //   });
  // };

  // useEffect(() => {
  //   printSelectedPlayers();
  //   // console.log("team chnaged");
  // }, [currentTeam]);

  // const createFirstLetter = (playerObj: String) => {
  //   let firstLetter = playerObj.split("")[0];
  //   return firstLetter;
  // };

  const getSurname = (playerObj: IPlayer)  => { 
    const surname = playerObj.playerName.split(" ")[1]
    return surname
  }

  return (
    <section className={styles.selectedTeam}>
      {/* {printSelectedPlayers()} */}
      {currentTeam.map((playerObj) => {
        return (
          <div className={styles.SelectedPlayer}>
            <img src={close} alt="Unselect Player" />
            <p>{playerObj.positionNum[0]}</p>
            <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(playerObj)}`}</p>

          </div>
        );
      })}
    </section>
  );
};

export default SelectedPlayer;
