import React from "react";
import styles from "./TeamScoreModal.module.scss";

// import submitSvg from "./assets/images/Icons/enter-arrow.svg";
// import close from "../../assets/images/Icons/cancel.svg";
// import UpArrow from "../../assets/images/Icons/up-chevron.svg"
import DownArrow from "../../assets/images/Icons/down-chevron.svg"


interface ScoreModalProps { 
  toggleScoreModal:(input: boolean) => any;
  scoreModal: boolean;
  getTeamScoreJsx: (input: any) => any;
}


const TeamScoreModal: React.FC<ScoreModalProps> = ({toggleScoreModal, scoreModal, getTeamScoreJsx}) => {
  return (
    <section className={styles.scoreModalContainer} onClick={() => toggleScoreModal(false)}>
      <div className={styles.scoreModalBox}>
        <div>        
          <h2>Scores on the doors</h2>
          <p>Defense: {getTeamScoreJsx("defending")} %</p> 
          <p>Tackling: {getTeamScoreJsx("tackling")} %</p>
          <p>Strength: {getTeamScoreJsx("strength")} %</p>
          <p>Fitness: {getTeamScoreJsx("fitness")} %</p>
          <p>Speed: {getTeamScoreJsx("speed")} %</p>
          <p>Passing: {getTeamScoreJsx("passing")} %</p>
          <p>Attack: {getTeamScoreJsx("attacking")} %</p>
          <p>Experience: {getTeamScoreJsx("experience")} %</p>

        </div>

        {/* <button onClick={() => {toggleInstructionModal(false)}}>Close</button> */}

        <img src={DownArrow} alt="Close Pop Up" onClick={() => {toggleScoreModal(false)}}/>

      </div>
    </section>
  );
};

export default TeamScoreModal;
