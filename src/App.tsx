import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
// import Header2 from "./assetts/variables.scss";
import RugbyBall from "./assetts/images/rugby.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import SelectedPlayer from "./components/SelectedPlayer";
import Steven from "./assetts/images/steven-luatua_30-removebg-preview.png";

import players from "./data/data";

// interface CardProps {
//   player: object;
// }

function App() {
  const [currentTeam, addPlayerToTeam] = useState([
    { playerName: "S. Luatua" },
    { playerName: "H. Thacker" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  console.log(players);

  useEffect(() => {
    console.log(currentTeam);
  }, [currentTeam]);
  // console.log(currentTeam);

  // const selectedPlayers = currentTeam.map((player) => player.playerName);
  // const filteredPlayers = players
  //   .filter((player) => !selectedPlayers.includes(player.playerName))
  //   .filter((player) => player.position == positionFilter);

  return (
    <>
      <h1>Bristol Bears Team Selector</h1>
      <section className={styles.team}>
        <SelectedPlayer />
        {/* <SelectedPlayer /> */}
        {/* <SelectedPlayer /> */}
      </section>

      {/* <Button btnText="Button" btnImg="/assetts/images/rugby.svg" /> */}
      <div className={styles.Cards}>
        {players.map((player) => {
          return <Card player={player} />;
          // return <Card player={player} addPlayerToTeam={addPlayerToTeam} currentTeam={currentTeam}/>;
        })}
      </div>

      {/* {
        currentTeam.map((playerObj) => { 
          if (playerObj !== null || playerObj !== undefined){
          return ( 
            <SelectedPlayer playerObj={playerObj}/>
          )
          }
        })
      } */}
    </>
  );
}

export default App;
