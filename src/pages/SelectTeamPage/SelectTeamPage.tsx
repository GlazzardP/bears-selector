import React, { useState } from "react";
import styles from "./SelectTeamPage.module.scss";

import * as firebase from 'firebase/app';
import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
// import provider from "../../firebase";


import PitchLayout from "../../containers/PitchLayout"

import Card from "../../components/Card";
import SelectedPlayers from "../../components/SelectedPlayers";
import Navbar from "../../components/Navbar";
import TeamScoreModal from "../../containers/TeamScoreModal"

import players, { IPlayer, NAdeolokun } from "../../data/data";
// import DummyPlayer, {NAdeolokun, initialTeam} from "../../data/data";
import Button from "../../components/Button";


import submitSvg from "./assets/images/Icons/enter-arrow.svg";
import close from "../../assets/images/Icons/cancel.svg";
import UpArrow from "../../assets/images/Icons/up-chevron.svg"
import DownArrow from "../../assets/images/Icons/down-chevron.svg"

// import Accordion from "./components/Accordion";


// interface landingPageProps { 

// }

const SelectTeamPage: React.FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false); // Player filter accordion
  const [teamScoreOpen, setTeamScoreOpen] = useState<boolean>(false); // Team score accordion, footer of page

  const [playerFilter, setPlayerFilterChoices] = useState<any>({})
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);
  const [loginRecommendationModal, setLoginRecommendation] = useState<boolean>(true);
  const [scoreModal, toggleScoreModal]= useState<boolean>(false);

  console.log(teamScoreOpen);

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
    // } 
    // else (
    //   console.log(currentTeam.length + 1)
    // )
    } 
    // else if (
      // currentTeam.length + 1 !== player.positionNum[0] &&
      // currentTeam.length + 1 !== player.positionNum[1] &&
      // currentTeam.length + 1 !== player.positionNum[2] &&
      // currentTeam.length + 1 !== player.positionNum[3] &&
      // currentTeam.length + 1 !== player.positionNum[4]) {

      addPlayerToTeam([...currentTeam, player]);
      // alert(`${currentTeam.length + 1} and ${player.positionNum[0]}, ${player.positionNum[1]}, ${player.positionNum[2]}, ${player.positionNum[3]}, ${player.positionNum[4]  }`)
    // } else (

    //     alert('wrong position')
    // )
    return currentTeam; // Was working without this return ?? 
  };

    const updateTeam = (playerObj: IPlayer) => {
    const teamAlreadySelected = [...currentTeam];
    teamAlreadySelected[playerObj.positionNum[0] - 1] = playerObj;
    addPlayerToTeam(teamAlreadySelected);
  };

  //   const signIn = (provider: any) => { 
  //   firebase.auth().onAuthStateChanged(provider)
  // }

    const getAvailablePlayers = () => {
  //   // const teamPlayers = players;

    const availablePlayers = players.map((player) => {
      if (
        !currentTeam.includes(player) && 
      Object.entries(playerFilter).length === 0
      ) {
        return (
          <Card
            key={player.playerName}
            player={player}
            setPlayer={setPlayer}
          />
          // console.log('foo')
        );

      } else if (
        !currentTeam.includes(player) &&  // They are not in the team
        Object.entries(playerFilter).length !== 0 && // Any filter has been set
        playerFilter.position === player.position && // Position is the same  users choice
        playerFilter.minHeight <= player.playerHeight && // Height is the same or greater than users choice
        playerFilter.maxHeight >= player.playerHeight && // Height is the less than or equal than users choice
        playerFilter.defence <= player.defending// Defending is as required
        // getFilteredAvailablePlayers()
      ) { 
        return ( 
          <Card
          key={player.playerName}
          player={player}
          setPlayer={setPlayer}
        />
        )
      } else if (currentTeam.length >= 14) {
        console.log("You've already selected 15 players.");
      }
    });
    return availablePlayers;
  };


  return (

    <section className={styles.App}>
      {/* <Navbar signIn={signIn} /> */}
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
                  <option value="Prop" label="Prop">Prop</option>
                  <option value="Hooker" label="Hooker">Hooker</option>
                  <option value="Second Row" label="Secon Row">Second Row</option>
                  <option value="Back Row" label="Back Row">Back Row</option>
                  <option value="Number 8" label="Number 8">Number 8</option>
                  <option value="Scrum Half" label="Scrum Half">Scrum Half</option>
                  <option value="Fly Half" label="Fly Half">Fly Half</option>
                  <option value="Centre" label="Centre">Centre</option>
                  <option value="Wing" label="Wing">Wing</option>
                  <option value="Full Back" label="Full Back">Full Back</option>
                </select>
              </div>


              <div>
                <label>Min-height </label>
                <input type="number" id="height" name="height" min="50" max="210" placeholder="cm" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "minHeight": event.target.value})}}/>
                <label>Max-height </label>
                <input type="number" id="height" name="height" min="50" max="210" placeholder="cm" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "maxHeight": event.target.value})}}/>
              </div>

              <div>

              <div>
                <label>Defence</label>
                <input type="number" id="defence" name="defence" min="0" max="100" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "defence": event.target.value})}}/>

              </div>

              <div>
                <label>Attack</label>
                <input type="number" id="attack" name="attack" min="0" max="100" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "attack": event.target.value})}}/>

              </div>

              <div>
                <label>Fitness</label>
                <input type="number" id="fitness" name="fitness" min="0" max="100" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "fitness": event.target.value})}}/>

              </div>

              <div>
                <label>Kicking</label>
                <input type="number" id="kicking" name="kicking" min="0" max="100" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "kicking": event.target.value})}}/>

              </div>

              <button onClick={() => {getAvailablePlayers()}}>Update Players</button>

              </div>
              </div>
            </div>
          </div>   


          </div>

        </div>
        <section className={styles.allCards}>

          {getAvailablePlayers()}

        </section>

        <PitchLayout currentTeam={currentTeam} getSurname={getSurname} />


        <div className={styles.scoreModalDiv}>
          <p>Team Score</p>
          <img className={styles.scoreModalArrow} src={UpArrow} alt="Close Speech Bubble" onClick={() => {toggleScoreModal(true)}}/>
        </div>

        <div className={styles.teamDesktopScore}>         

            <p>Tackling: {getTeamScoreJsx("tackling")} %</p>
            <p>Strength: {getTeamScoreJsx("strength")} %</p>
            <p>Fitness: {getTeamScoreJsx("fitness")} %</p>
            <p>Speed: {getTeamScoreJsx("speed")} %</p>
            <p>Passing: {getTeamScoreJsx("passing")} %</p>
            <p>Attack: {getTeamScoreJsx("attacking")} %</p>
            <p>Experience: {getTeamScoreJsx("experience")} %</p>
            <p>Defense: {getTeamScoreJsx("defending")} %</p> 

        </div>

          {scoreModal ? ( 
              <TeamScoreModal toggleScoreModal={toggleScoreModal} scoreModal={scoreModal} getTeamScoreJsx={getTeamScoreJsx} />
           ) : null}


      </section>
    </section>
  );
};

export default SelectTeamPage;






