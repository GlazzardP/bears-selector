import React, { useEffect, useState } from "react";
// import firebase from "./firebase";

import * as firebase from 'firebase/app';
import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
import provider from "./firebase";

import styles from "./App.module.scss";

// Containers 
import PitchLayout from "./containers/PitchLayout"

import Card from "./components/Card";
import SelectedPlayers from "./components/SelectedPlayers";
import Navbar from "./components/Navbar";

import players, { IPlayer } from "./data/data";
import DummyPlayer, {NAdeolokun, initialTeam} from "./data/data";
import Button from "./components/Button";


import submitSvg from "./assets/images/Icons/enter-arrow.svg";
import close from "./assets/images/Icons/cancel.svg";
// import Accordion from "./components/Accordion";

// import filter from "./assets/images/filter.svg";
// import dropDown from "./assets/images/arrow-down-sign-to-navigate.svg";

// interface iAppProps {
//   // player: IPlayer;
//   // setPlayer: (player: IPlayer) => void;
//   chosenPosition: number;

// }

function App() {
  // const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun,NAdeolokun]);
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);

  // const [updatedTeam, setUpdatedTeam] = useState<IPlayer[]>([]);
  const [playerFilter, setPlayerFilterChoices] =useState<any>({})
  // const [positionFiltered, setFilteredPosition] = useState<string>("");

  // const [availablePlayers, setAvailablePlayersRedundant] =useState<IPlayer[]>([])

  const [isOpen, setOpen] = useState<boolean>(false);
  const [loginRecommendationModal, setLoginRecommendation] = useState<boolean>(true);



  // const unselectPlayer = (currentTeam: IPlayer[]) => {
  //   const updatedTeam = currentTeam.splice(position, 1);
  //   return updatedTeam;
  // };

  // const updateTeam = (playerObj: IPlayer) => {
  //   const teamAlreadySelected = [...currentTeam];
  //   teamAlreadySelected[playerObj.positionNum[0] - 1] = playerObj;
  //   addPlayerToTeam(teamAlreadySelected);
  // };

  // const submitButtonJsx = if(currentTeam.length == 14) {
  //   return (
  //     <Button btnText="Submit" handleClick={() => alert('Clicked')}/>
  //     )
  //   } else {
  //     return (
  //       ""
  //     )
  //   }

  const setPlayer = (player: IPlayer) => {
    if (currentTeam.includes(player)) {
      return alert("This player is already selected.");
    } else if (currentTeam.length > 14) {
      alert("You've already got a full team.");
    // } 
    // else (
    //   console.log(currentTeam.length + 1)
    // )
    } else if (
      currentTeam.length + 1 !== player.positionNum[0] ||
      currentTeam.length + 1 !== player.positionNum[1] ||
      currentTeam.length + 1 !== player.positionNum[2] ||
      currentTeam.length + 1 !== player.positionNum[3] ||
      currentTeam.length + 1 !== player.positionNum[4]) {
        // alert("This player cannot play in this position.")
        //  console.log(currentTeam.length + 1)

      addPlayerToTeam([...currentTeam, player]);
    } else (
        addPlayerToTeam([...currentTeam, player])
    )
    return currentTeam; // Was working without this return ?? 
  };


  const getSurname = (playerObj: IPlayer) => {
    const surname = playerObj.playerName.split(" ")[1];
    return surname;
  };

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


  // const getFilteredAvailablePlayers = () => { 
  //   availablePlayers.map((player) => { 
  //     if (Object.entries(playerFilter.position).length !== 0 && playerFilter.position === "Second Row"){ 
  //       return ( 
  //         <Card
  //         key={player.playerName}
  //         player={player}
  //         setPlayer={setPlayer}
  //       />
  //       )
  //     }
  //   })

  // }


  const getAvailablePlayers = () => {
    // const teamPlayers = players;

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


  const signIn = (provider: any) => { 
    firebase.auth().onAuthStateChanged(provider)
  }


  return (
    <section className={styles.App}>
      <Navbar signIn={signIn} />
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
        {/* <section className={styles.Pitch}>
          <div className={styles.PitchImage}>
            <div className={styles.team}>
            <div className={styles.frontRow}>
              {currentTeam.slice(0, 3).map((playerObj) => (
                <div className={styles.ShirtPlayer} key={playerObj.playerName}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>
                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>

                </div>
              ))}
            </div>

            <div className={styles.secondRow}>
              {currentTeam.slice(3, 5).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                 <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>

                </div>
              ))}
            </div>

            <div className={styles.backRow}>
              {currentTeam.slice(5, 8).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
              ))}
            </div>

            <div className={styles.scrumHalf}>
              {currentTeam.slice(8, 9).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>
                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
              ))}
            </div>
            <div className={styles.flyHalf}>
              {currentTeam.slice(9, 10).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
              ))}
            </div>
            <div className={styles.centre}>
              {currentTeam.slice(10, 12).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                 <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
              ))}
            </div>
            <div className={styles.wings}>
              {currentTeam.slice(12, 15).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                   <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section> */}
        {/* <div className={styles.submitBubble}></div> */}
        <div className={styles.teamScore}>

          <div>
            <p>Defense: {getTeamScoreJsx("defending")} %</p>
            <p>Tackling: {getTeamScoreJsx("tackling")} %</p>
            <p>Strength: {getTeamScoreJsx("strength")} %</p>
            <p>Fitness: {getTeamScoreJsx("fitness")} %</p>
            <p>Speed: {getTeamScoreJsx("speed")} %</p>
            <p>Passing: {getTeamScoreJsx("passing")} %</p>
            <p>Attack: {getTeamScoreJsx("attacking")} %</p>
            <p>Experience: {getTeamScoreJsx("experience")} %</p>
          </div>
                    {/* <button onClick={() => signIn()}>Sign IN</button> */}


          <div>
            {currentTeam.length > 14 && (
              <Button
                // btnImg={submitSvg}
                btnText="Submit team"
                handleClick={() => alert("Submit team")}
              />
            )}
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
