import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
// import Header2 from "./assetts/variables.scss";
// import RugbyBall from "./assetts/images/rugby.svg";
// import Button from "./components/Button";
import Card from "./components/Card";
import SelectedPlayers from "./components/SelectedPlayers";
// import Steven from "./assetts/images/steven-luatua_30-removebg-preview.png";
import Navbar from "./components/Navbar";

import players, { IPlayer } from "./data/data";
import DummyPlayer from "./data/data";

// interface CardProps {
//   player: object;
// }

function App() {
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);
  // const [showPlayers, setShowPlayers] = useState<IPlayer[]>([]);

  const setPlayer = (player: IPlayer) => {
    if (currentTeam.includes(player)) {
      return alert("This player is already selected.");
      // return console.log("foo");
    } else if (currentTeam.length >= 14) {
      return alert("You have a full team already.");
    } else {
      addPlayerToTeam([...currentTeam, player]);
    }
  };

  const getAvailablePlayers = () => {
    const teamPlayers = players;

    const newTeamPlayers = teamPlayers.map((player) => {
      if (!currentTeam.includes(player)) {
        return (
          <div className={styles.Cards}>
            <Card
              key={player.playerName}
              player={player}
              setPlayer={setPlayer}
            />
          </div>
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
        <SelectedPlayers currentTeam={currentTeam} />
      </section>
      {getAvailablePlayers()}
    </section>
  );
}

export default App;
