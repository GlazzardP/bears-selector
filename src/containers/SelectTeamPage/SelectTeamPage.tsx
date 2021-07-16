import React, { useEffect, useState } from "react";
import styles from "./SelectTeamPage.module.scss";

import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code

import PitchLayout from "../PitchLayout"
import Card from "../../components/Card";
import SelectedPlayers from "../../components/SelectedPlayers";
import ConfModal from "../../components/ConfModal";
import players, { IPlayer } from "../../data/data";
import close from "../../assets/images/Icons/cancel.svg";
import UpArrow from "../../assets/images/Icons/up-chevron.svg"
import TeamScoreModal from "../TeamScoreModal";
import Button from "../../components/Button";
import StatsPage from "../StatsPage";
// import { createExternalModuleReference } from "typescript";

interface SelectPageProps { 
  addPlayerToTeam: (currentTeam: any) => any;
  currentTeam: IPlayer[];
  addToDb: () => any;
  user: any;
}

const SelectTeamPage: React.FC<SelectPageProps> = ({addPlayerToTeam, currentTeam, addToDb, user}) => {
  const [isOpen, setOpen] = useState<boolean>(false); // Player filter accordion
  // const [teamScoreOpen, setTeamScoreOpen] = useState<boolean>(false); // Team score accordion, footer of page
  const [playerFilter, setPlayerFilterChoices] = useState<any>({})
  // const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);
  const [loginRecommendationModal, setLoginRecommendation] = useState<boolean>(true);
  const [scoreModal, toggleScoreModal]= useState<boolean>(false);
  const [availablePlayers, setAvailablePlayers]=useState<any>([])
  const [confModal, toggleConfModal] = useState<boolean>(false);
  const [pitchPage, togglePitchPage] = useState(true);

  const getTeamScoreJsx = (type: any) => {
    const currentTeamArray = currentTeam.filter((playerObj) => {
      return playerObj.hasOwnProperty(type);
    });
    let scoreArray = currentTeamArray.map((playerObj: any) => playerObj[type]);
    let scoreSum = scoreArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return Math.floor(scoreSum / currentTeamArray.length) || 0;
  };

    const getSurname = (playerObj: IPlayer) => {
    const surname = playerObj.playerName.split(" ")[1];
    return surname;
  };

    const setPlayer = (player: IPlayer) => {
    if (currentTeam.includes(player)) {
      return alert("This player is already selected.");
    } else if (currentTeam.length > 14) {
      alert("You've already got a full team.");
    } else if (player.positionNum.includes(currentTeam.length + 1)) { 
      addPlayerToTeam([...currentTeam, player]);
    } else { 
      alert("This player cannot play in this position.")
    }
    return currentTeam;
  };



const printAvailablePlayers = () => { 
  if (playerFilter.position === undefined){ 
    setAvailablePlayers(players.filter((player) => !currentTeam.includes(player)))
  } else if (playerFilter.position !== "") { 
    setAvailablePlayers(players.filter((player) => !currentTeam.includes(player) && player.position === playerFilter.position))
  }
}

  useEffect(() => { 
    printAvailablePlayers()
  }, [currentTeam, playerFilter])

  const watchLoginModal = () => { 
    if (user) { 
      setLoginRecommendation(!loginRecommendationModal)
    }
  }

  useEffect(() => { 
    watchLoginModal()
  }, [user])

  const sortPlayersByWeight = () => { 
      availablePlayers.sort((a, b) => {
      return b.weight - a.weight;
  });
    // return availablePlayers.sort((a, b) => a.weight - b.weight)
    
  }

  const addToDatabaseandConModal = () => {
      if (currentTeam.length > 14) {
        addToDb()
      } else  {
        console.log("Not enough team members");
      }
      toggleConfModal(true);
  }

  // <select name="sort" id="sort" onChange={(event) => {availablePlayers.sort((a, b) => a.weight - b.weight)}}>
  

  return (
    <>
    {
      pitchPage ? 
      <section className={styles.App}>
      <section className={styles.team}>
        <SelectedPlayers
          currentTeam={currentTeam}
          onClick={onclick}
        />
      </section>
      <section className={styles.main}>
        <div className={`${styles.loginRecommendationModal} ${loginRecommendationModal ? styles.loginRecommendationModal : styles.noLoginRecommendation}`}>
        <img src={close} alt="Close Speech Bubble" onClick={() => {setLoginRecommendation(!loginRecommendationModal)}}/>

          <p>We recommend logging in <br></br> before starting your team.<br></br> This means you can submit and see which players are most popular.</p>
        </div>
        <div className={styles.tempClass}>
          <div className={styles.accordionDivHolder}>
          <div className={styles.accordionWrapper}>
            <div
              className={`${styles.accordionTitle} ${isOpen ? styles.open : ""}`}
              onClick={() => setOpen(!isOpen)}
              >
                Filter Options
            </div>
            <div className={`${styles.accordionItem} ${!isOpen ? styles.collapsed : ""}`}>
              <div className={styles.accordionContent}>
              <div>

                <label>Position</label>
                <select name="position" id="position" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "position": event.target.value})}}>
                <option value="" label=""></option>

                  <option value="Prop" label="Prop">Prop</option>
                  <option value="Hooker" label="Hooker">Hooker</option>
                  <option value="Second Row" label="Secon Row">Second Row</option>
                  <option value="Flanker" label="Flanker">Back Row</option>
                  <option value="Number 8" label="Number 8">Number 8</option>
                  <option value="Scrum Half" label="Scrum Half">Scrum Half</option>
                  <option value="Fly Half" label="Fly Half">Fly Half</option>
                  <option value="Centre" label="Centre">Centre</option>
                  <option value="Wing" label="Wing">Wing</option>
                  <option value="Full Back" label="Full Back">Full Back</option>
                </select>

              </div>

              </div>
            </div>
          </div>   
          </div>

        </div>
        <section className={styles.allCards}>
          {availablePlayers.map((player: IPlayer) => {
            return (
              <Card
              key={player.playerName}
              player={player}
              setPlayer={setPlayer}
            />
            )

          })}

        </section>

        <PitchLayout currentTeam={currentTeam} getSurname={getSurname} />

        <div className={styles.scoreModalDiv}>
          <p>Team Score</p>
          <img className={styles.scoreModalArrow} src={UpArrow} alt="Close Speech Bubble" onClick={() => {toggleScoreModal(true)}}/>
        </div>
        <div className={styles.desktopScorePercentages}>
          <p>Defense: {getTeamScoreJsx("defending")}%</p> 
          <p>Tackling: {getTeamScoreJsx("tackling")}%</p>
          <p>Strength: {getTeamScoreJsx("strength")}%</p>
          <p>Fitness: {getTeamScoreJsx("fitness")}%</p>
          <p>Speed: {getTeamScoreJsx("speed")}%</p>
          <p>Passing: {getTeamScoreJsx("passing")}%</p>
          <p>Attack: {getTeamScoreJsx("attacking")}%</p>
          <p>Experience: {getTeamScoreJsx("experience")}%</p>
          <Button btnText="Submit" handleClick={() => addToDatabaseandConModal()} />
        </div>

          {
            scoreModal ? ( 
              <TeamScoreModal toggleScoreModal={toggleScoreModal} scoreModal={scoreModal} getTeamScoreJsx={getTeamScoreJsx} />
           ) : null
          }
      </section>
      {
          confModal ? (
          <ConfModal
            toggleConfModal={toggleConfModal}
            togglePitchPage={togglePitchPage}
          />
        ) : null
      }

    </section> : <StatsPage  />
    }

    </>


    // <section className={styles.App}>
    //   <section className={styles.team}>
    //     <SelectedPlayers
    //       currentTeam={currentTeam}
    //       onClick={onclick}
    //     />
    //   </section>
    //   <section className={styles.main}>
    //     <div className={`${styles.loginRecommendationModal} ${loginRecommendationModal ? styles.loginRecommendationModal : styles.noLoginRecommendation}`}>
    //     <img src={close} alt="Close Speech Bubble" onClick={() => {setLoginRecommendation(!loginRecommendationModal)}}/>

    //       <p>We recommend logging in <br></br> before starting your team.<br></br> This means you can submit and see which players are most popular.</p>
    //     </div>
    //     <div className={styles.tempClass}>
    //       <div className={styles.accordionDivHolder}>
    //       <div className={styles.accordionWrapper}>
    //         <div
    //           className={`${styles.accordionTitle} ${isOpen ? styles.open : ""}`}
    //           onClick={() => setOpen(!isOpen)}
    //           >
    //             Filter Options
    //         </div>
    //         <div className={`${styles.accordionItem} ${!isOpen ? styles.collapsed : ""}`}>
    //           <div className={styles.accordionContent}>
    //           <div>

    //             <label>Position</label>
    //             <select name="position" id="position" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "position": event.target.value})}}>
    //             <option value="" label=""></option>

    //               <option value="Prop" label="Prop">Prop</option>
    //               <option value="Hooker" label="Hooker">Hooker</option>
    //               <option value="Second Row" label="Secon Row">Second Row</option>
    //               <option value="Flanker" label="Flanker">Back Row</option>
    //               <option value="Number 8" label="Number 8">Number 8</option>
    //               <option value="Scrum Half" label="Scrum Half">Scrum Half</option>
    //               <option value="Fly Half" label="Fly Half">Fly Half</option>
    //               <option value="Centre" label="Centre">Centre</option>
    //               <option value="Wing" label="Wing">Wing</option>
    //               <option value="Full Back" label="Full Back">Full Back</option>
    //             </select>

    //           </div>

    //           </div>
    //         </div>
    //       </div>   
    //       </div>

    //     </div>
    //     <section className={styles.allCards}>
    //       {availablePlayers.map((player: IPlayer) => {
    //         return (
    //           <Card
    //           key={player.playerName}
    //           player={player}
    //           setPlayer={setPlayer}
    //         />
    //         )

    //       })}

    //     </section>

    //     <PitchLayout currentTeam={currentTeam} getSurname={getSurname} />

    //     <div className={styles.scoreModalDiv}>
    //       <p>Team Score</p>
    //       <img className={styles.scoreModalArrow} src={UpArrow} alt="Close Speech Bubble" onClick={() => {toggleScoreModal(true)}}/>
    //     </div>
    //     <div className={styles.desktopScorePercentages}>
    //       <p>Defense: {getTeamScoreJsx("defending")}%</p> 
    //       <p>Tackling: {getTeamScoreJsx("tackling")}%</p>
    //       <p>Strength: {getTeamScoreJsx("strength")}%</p>
    //       <p>Fitness: {getTeamScoreJsx("fitness")}%</p>
    //       <p>Speed: {getTeamScoreJsx("speed")}%</p>
    //       <p>Passing: {getTeamScoreJsx("passing")}%</p>
    //       <p>Attack: {getTeamScoreJsx("attacking")}%</p>
    //       <p>Experience: {getTeamScoreJsx("experience")}%</p>
    //       <Button btnText="Submit" handleClick={() => addToDatabaseandConModal()} />
    //     </div>

    //       {scoreModal ? ( 
    //           <TeamScoreModal toggleScoreModal={toggleScoreModal} scoreModal={scoreModal} getTeamScoreJsx={getTeamScoreJsx} />
    //        ) : null}
    //   </section>
    //   {confModal ? (
    //     <ConfModal
    //       toggleConfModal={toggleConfModal}
    //       togglePitchPage={togglePitchPage}
    //     />
    //   ) : null}
    // </section>
  );
};

export default SelectTeamPage;