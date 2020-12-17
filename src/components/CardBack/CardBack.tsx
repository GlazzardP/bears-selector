import React from "react";
import styles from "./CardBack.module.scss";
import bearsLogo from "../../assets/images/1200px-Bristol_Bears_logo.svg.png";

import { IPlayer } from "../../data/data";

interface CardBackProps {
  player: IPlayer;
}

const CardBack: React.FC<CardBackProps> = ({ player }) => {
  console.log(player);

  // const CardBack = () => {
  const stopEventPropagation = (e: any) => {
    e.stopPropagation();
  };

  const kickingJsx = player.kicking ? <p>Kicking: {player.kicking}</p> : "";
  const lineoutJsx = player.lineOut ? <p>lineout: {player.lineOut}</p> : "";
  const scrummagingJsx = player.scrummaging ? (
    <p>scrummaging: {player.scrummaging}</p>
  ) : (
    ""
  );

  // condition ? exprIfTrue : exprIfFalse

  return (
    <section className={styles.cardBack}>
      <div className={styles.baseCard}>
        <img src={bearsLogo} alt="Bristol Bears" />
      </div>
      <section className={styles.cardBody}>
        <h2>{player.playerName}</h2>
        <p>{player.position}</p>
        <h4>Core</h4>
        <div className={styles.coreSkills}>
          <p>Strength: {player.strength}</p>
          <p>Fitness: {player.fitness}</p>
          <p>Speed: {player.speed} </p>
          <p>Tackling: {player.tackling} </p>
          <p>Passing: {player.passing} </p>
          <p>Attacking: {player.attacking} </p>
        </div>
        <h4>Specialist</h4>
        <div className={styles.specialistSkills}>
          {/* <p>Kicking: {player.kicking}</p> */}
          {kickingJsx}
          {scrummagingJsx}
          {/* <p>Scrummaging: {player.scrummaging}</p> */}
          {lineoutJsx}
          {/* <p>Line Out: {player.lineOut}</p> */}
        </div>

        <div
          className={styles.playerButtons}
          onClick={(e) => stopEventPropagation(e)}
        >
          <button onClick={() => alert("Picked")}>Pick</button>
        </div>
      </section>
    </section>
  );
};

export default CardBack;
