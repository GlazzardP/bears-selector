import React, { useState } from "react";
import styles from "./CardFront.module.scss";
import bearsLogo from "../../assets/images/1200px-Bristol_Bears_logo.svg.png";
import { useId } from "react-id-generator";

import Button from "../../components/Button";

import { IPlayer } from "../../data/data";
// impor {ButtonProps} from "../../"

interface CardFrontProps {
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
  // chosenPosition: number;
  // updateTeam: (playerObj: IPlayer) => void;

  // position: number;
  // setPosition: (player: IPlayer) => number;
  // position: number;
  // addPlayerToTeam: () => Array<object>;
  // currentTeam: Array<object>
  // addPlayerToTeam:
  // currentTeam
  // btnText: string;
  // btnImg: string;
  // handleClick: () => any;
}

const CardFront: React.FC<CardFrontProps> = ({
  player,
  setPlayer,
  // chosenPosition
  // updateTeam,
}) => {
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);

  const [chosenPosition, setChosenPosition] = useState<number>(player.positionNum[0]);
  const [htmlId] = useId();

  // console.log(position);

  const stopEventPropagation = (e: any) => {
    e.stopPropagation();
  };

  const handleChange = (e: any) => {
    setChosenPosition(e.target.value);
  };

  const totalScoreJsx = player.attacking + player.defending + player.experience + player.fitness + player.passing + player.speed + player.strength;
  const averageScoreJsx = totalScoreJsx/7; 

  const playerPositionJsx = player.positionNum.map((number) => {
    // console.log(player.playerName);

    return (
      <option
        key={htmlId + number}
        value={number}
        className={styles.selectOption}
      >
        {number}
      </option>
    );
  });

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
                <p>{Math.round(averageScoreJsx)}</p>
                <img src={player.flag} alt="Players National Flag" />
              </div>
            </div>
            <div className={styles.playerDetails}>
              <div className={styles.playerDetailsName}>
                <p className={styles.playersName}>{player.playerName}</p>
                <p className={styles.playersPosition}>{player.position}</p>
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
                  <select
                    name="position"
                    id="position"
                    onChange={handleChange}
                    className={styles.positionSelect}
                  >
                    {playerPositionJsx}
                  </select>
                </div>
                <div>
                  <p>Height</p>
                  <p>{player.playerHeight}cm</p>
                </div>
              </div>
              <div
                className={styles.playerButtons}
                onClick={(e) => stopEventPropagation(e)}
              >
                {/* <button onClick={() => alert(`Picked ${chosenPosition}`)}>{chosenPosition} Evidence</button> */}
                <button className={styles.selectButton} onClick={() => setPlayer(player)}>Pick</button>
                {/* <button onClick={() => updateTeam(playerObj)}>Pick</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardFront;
