import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import { IPlayer } from "../../data/data";

interface CardProps {
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
}

const Card: React.FC<CardProps> = ({ player, setPlayer }) => {

  const [isFaceUp, flipCard] = useState<boolean>(true);

  const rotateClass = isFaceUp ? "" : styles.faceDown;

  return (

      <section
        className={`${styles.playerCard} ${rotateClass}`}
        onClick={() => flipCard(!isFaceUp)}
      >
        <div className={styles.front}>
          <CardFront
            player={player}
            setPlayer={setPlayer}
          /> 
        </div>
        <div className={styles.back}>
          <CardBack player={player} setPlayer={setPlayer}></CardBack>
        </div>
      </section>

  );
};

export default Card;
