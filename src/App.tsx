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
      alert("Full Team");
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

      <section className={styles.allCards}>{getAvailablePlayers()}</section>
    </section>
  );
}

export default App;
