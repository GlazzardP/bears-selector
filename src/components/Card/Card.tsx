import React, { useState } from "react";
import { Interface } from "readline";
import styles from "./Card.module.scss";
// import bearsLogo from "../../assetts/images/1200px-Bristol_Bears_logo.svg.png";
// import playerImage from "../../assetts/images/steven-luatua_30-removebg-preview.png";
// import flag from "../../assetts/images/allBlacks.png";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import { IPlayer } from "../../data/data";

interface CardProps {
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
  // currentTeam: Array<object>
  // currentTeam
  // armadillo: number;
}

const Card: React.FC<CardProps> = ({ player, setPlayer }) => {
  console.log(player);

  const [isFaceUp, flipCard] = useState(true);

  const rotateClass = isFaceUp ? "" : styles.faceDown;

  return (
    <>
      <section
        className={`${styles.playerCard} ${rotateClass}`}
        onClick={() => flipCard(!isFaceUp)}
      >
        <div className={styles.front}>
          {/* <CardFront player={player}></CardFront> */}
          <CardFront player={player} setPlayer={setPlayer}></CardFront>
        </div>
        <div className={styles.back}>
          <CardBack player={player}></CardBack>
          {/* <CardBack player={player} addPlayerToTeam={addPlayerToTeam} currentTeam={currentTeam}></CardBack> */}
        </div>
      </section>
    </>
  );
};

export default Card;
