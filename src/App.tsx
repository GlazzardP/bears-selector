import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
// import Header2 from "./assetts/variables.scss";
import RugbyBall from "./assetts/images/rugby.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import Steven from "./assetts/images/steven-luatua_30-removebg-preview.png";

import players from "./data/data";

// interface CardProps {
//   player: object;
// }

function App() {
  console.log(players);

  return (
    <>
      <h2>Test Components</h2>
      {/* <Button btnText="Button" btnImg="/assetts/images/rugby.svg" /> */}
      {players.map((player) => {
        console.log(player);

        return <Card player={player} />;
      })}
    </>
  );
}

export default App;
