import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
// import Header2 from "./assetts/variables.scss";
// import RugbyBall from "./assetts/images/rugby.svg";
// import Button from "./components/Button";
import Card from "./components/Card";
import SelectedPlayers from "./components/SelectedPlayers";
// import Steven from "./assetts/images/steven-luatua_30-removebg-preview.png";
import Navbar from "./components/Navbar";

import players, { initialTeam, IPlayer } from "./data/data";
import DummyPlayer from "./data/data";

function App() {
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);
  // const [showPlayers, setShowPlayers] = useState<IPlayer[]>([]);
  // const [chosenPosition, setChosenPosition] = useState<number>(1);
  const [updatedTeam, setUpdatedTeam] = useState<IPlayer[]>([]);

  console.log(currentTeam);

  // const unselectPlayer = (currentTeam: IPlayer[]) => {
  //   const updatedTeam = currentTeam.splice(position, 1);
  //   return updatedTeam;
  // };

  // const updateTeam = (playerObj: IPlayer) => {
  //   const teamAlreadySelected = [...currentTeam];
  //   teamAlreadySelected[playerObj.positionNum[0] - 1] = playerObj;
  //   addPlayerToTeam(teamAlreadySelected);
  // };

  const setPlayer = (player: IPlayer) => {
    if (currentTeam.includes(player)) {
      return alert("This player is already selected.");
      // } else if (currentTeam.length > 14) {
      //   return alert("You have a full team already.");
      // } else {
    } else if (currentTeam.length > 14) {
      alert("You've already got a full team.");
    } else {
      addPlayerToTeam([...currentTeam, player]);
    }
    // const teamAlreadySelected = [...currentTeam];
    // addPlayerToTeam(teamAlreadySelected[player.positionNum[0]]);
  };

  const getAvailablePlayers = () => {
    const teamPlayers = players;

    const newTeamPlayers = teamPlayers.map((player) => {
      if (!currentTeam.includes(player)) {
        return (
          // <div className={styles.Cards}>
          <Card
            key={player.playerName}
            player={player}
            setPlayer={setPlayer}
            // updateTeam={updateTeam}
          />
          // </div>
        );
      } else if (currentTeam.length >= 14) {
        console.log("You've already selected 15 players.");
      }
    });
    return newTeamPlayers;
  };

  const getSurname = (playerObj: IPlayer) => {
    const surname = playerObj.playerName.split(" ")[1];
    return surname;
  };

  return (
    <section className={styles.App}>
      <Navbar />
      <section className={styles.team}>
        <SelectedPlayers
          currentTeam={currentTeam}
          onClick={onclick}
          // unselectPlayer={unselectPlayer}
          // player={player}
        />
      </section>
      <section className={styles.main}>
        <section className={styles.allCards}>{getAvailablePlayers()}</section>

        <section className={styles.Pitch}>
          <div className={styles.frontRow}>
            {currentTeam.slice(0, 3).map((playerObj) => (
              <div className={styles.ShirtPlayer} key={playerObj.playerName}>
                <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                  playerObj
                )}`}</p>

                {/* <p>{playerObj.playerName}</p> */}
                <p>{playerObj.positionNum[0]}</p>
              </div>
            ))}
          </div>

          <div className={styles.secondRow}>
            {currentTeam.slice(3, 5).map((playerObj) => (
              <div className={styles.ShirtPlayer}>
                <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                  playerObj
                )}`}</p>
                <p>{playerObj.positionNum[0]}</p>
              </div>
            ))}
          </div>

          <div className={styles.backRow}>
            {currentTeam.slice(5, 15).map((playerObj) => (
              <div className={styles.ShirtPlayer}>
                <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                  playerObj
                )}`}</p>
                <p>{playerObj.positionNum[0]}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}

export default App;
