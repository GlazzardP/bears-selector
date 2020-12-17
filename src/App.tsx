import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
// import Header2 from "./assetts/variables.scss";
import RugbyBall from "./assetts/images/rugby.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import SelectedPlayers from "./components/SelectedPlayers";
// import Steven from "./assetts/images/steven-luatua_30-removebg-preview.png";
import Navbar from "./components/Navbar";

import players, { IPlayer } from "./data/data";

// interface CardProps {
//   player: object;
// }

function App() {
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);

  useEffect(() => {
    console.log(currentTeam);
  }, [currentTeam]);

  // const selectedPlayers = currentTeam.map((player) => player.playerName);
  // const filteredPlayers = players
  //   .filter((player) => !selectedPlayers.includes(player.playerName))
  //   .filter((player) => player.position == positionFilter);

  const setPlayer = (player: IPlayer) => {
    addPlayerToTeam([...currentTeam, player]);
  };

  // const setPlayer = (player: IPlayer) => {
  //   let team = [...currentTeam];
  //   team = team.splice(player.positionNum[0], 1, player);
  //   addPlayerToTeam(team);
  // };

  return (
    <section className={styles.App}>
      <Navbar />
      <section className={styles.team}>
        <SelectedPlayers currentTeam={currentTeam} />
      </section>

      {/* <Button btnText="Button" btnImg="/assetts/images/rugby.svg" /> */}
      <div className={styles.Cards}>
        {players.map((player) => {
          // return <Card player={player} />;
          return <Card player={player} setPlayer={setPlayer} />;
        })}
      </div>
    </section>
  );
}

export default App;
