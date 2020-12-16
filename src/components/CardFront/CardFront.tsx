import React, { useState } from "react";
import styles from "./CardFront.module.scss";
import bearsLogo from "../../assetts/images/1200px-Bristol_Bears_logo.svg.png";

import { IPlayer } from "../../data/data";

interface CardFrontProps {
  player: IPlayer;
}

const CardFront: React.FC<CardFrontProps> = ({ player }) => {
  // const CardFront = () => {
  const [playerPosition, setPlayerPosition] = useState(7);
  const [flag, setFlag] = useState("Bear");
  const [position, setPosition] = useState(null);

  console.log(position);

  const stopEventPropagation = (e: any) => {
    e.stopPropagation();
  };

  const handleChange = (event: any) => {
    setPosition(event.target.value);
  };

  const playerPositionJsx = player.positionNum.map((number) => {
    return <option value={`number`}>{number}</option>;
  });

  // const flagJsx = () => {
  //   if (player.nationality == "England") {
  //     setFlag('England')
  //   } else if (player.nationality == "New Zealand"){
  //     setFlag('England')

  //   }
  // };

  return (
    <div className={styles.cardFront}>
      <section className={styles.baseCard}>
        <div className={styles.bottomCard}>
          <img src={bearsLogo} alt="Bristol Bears" />
        </div>
        <div className={styles.lowerCard}>
          <img src={player.playerImg} alt="Player" />
        </div>
        <div className={styles.middleCard}></div>
        <div className={styles.topCard}>
          <div className={styles.topCardOrganise}>
            <div className={styles.season}>
              <p className={styles.seasonYear}>2020/21</p>
              <div>
                <p>88</p>
                <img src={player.flag} alt="Flag" />
              </div>
            </div>
            <div className={styles.playerDetails}>
              <div className={styles.playerDetailsName}>
                <h2>{player.playerName}</h2>
              </div>
              <div className={styles.playerDetailsInfo}>
                <div>
                  <p>Age</p>
                  <p>{player.playerAge}</p>
                </div>
                <div
                  className={styles.selectDrop}
                  onClick={(e) => stopEventPropagation(e)}
                >
                  <label>Position:</label>
                  <select name="position" id="position" onChange={handleChange}>
                    {playerPositionJsx}
                    {/* <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option> */}
                  </select>
                </div>
                <div>
                  <p>Height</p>
                  <p>{player.playerHeight}cm</p>
                </div>
              </div>
              <div className={styles.playerButtons}>
                <button onClick={() => alert(`Picked ${position}`)}>
                  Pick
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardFront;
