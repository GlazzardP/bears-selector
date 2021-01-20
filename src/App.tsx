import React, { useState } from "react";
// import firebase from "./firebase";
// import provider from "./firebase";

import styles from "./App.module.scss";

import Card from "./components/Card";
import SelectedPlayers from "./components/SelectedPlayers";
import Navbar from "./components/Navbar";

import players, { IPlayer } from "./data/data";
// import DummyPlayer from "./data/data";
import Button from "./components/Button";
import { stringify } from "querystring";
// import Accordion from "./components/Accordion";

// import filter from "./assets/images/filter.svg";
// import dropDown from "./assets/images/arrow-down-sign-to-navigate.svg";

// interface iAppProps {
//   // player: IPlayer;
//   // setPlayer: (player: IPlayer) => void;
//   chosenPosition: number;

// }

function App() {
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);
  // const [updatedTeam, setUpdatedTeam] = useState<IPlayer[]>([]);
  const [playerFilter, setPlayerFilterChoices] =useState<any>({})
  const [positionFiltered, setFilteredPosition] = useState<string>("");
  const [playerHeight, setPlayerH] = useState<number>();

  const [isOpen, setOpen] = useState<boolean>(false);



  console.log(playerFilter);

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
    } else {
      addPlayerToTeam([...currentTeam, player]);
    }
    return currentTeam; // Was working without this return ?? 
  };

  const getAvailablePlayers = () => {
    const teamPlayers = players;

    const newTeamPlayers = teamPlayers.map((player) => {
      if (!currentTeam.includes(player)) {
        return (
          <Card
            key={player.playerName}
            player={player}
            setPlayer={setPlayer}
            // chosenPosition={chosenPosition}
          />

        );
      } else if (currentTeam.length >= 14) {
        console.log("You've already selected 15 players.");
      }
    });
    return newTeamPlayers;
  };

  const getSurname = (playerObj: IPlayer) => {
    const surname = playerObj.playerName.split(" ")[1];
    return surname;
  };

  // const handleChange = (e: any) => {
  //   setPlayerFilterChoices({...playerFilter, "": e.target.value})
  //   // setFilteredPosition(e.target.value);
  // };

  // const setPlayerHeight = (e: any) => {
  //   setPlayerH(e.target.value);
  // };

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

  const filterPlayer = () => {
    const teamPlayers = players;

    const newTeamPlayers = teamPlayers.map((player) => {
      if (
        !currentTeam.includes(player) &&
        positionFiltered === player.position
      ) {
        // Need to change this so if any number within positionNum array matches, the player will show
        return (
          <Card key={player.playerName} player={player} setPlayer={setPlayer} />
        );
      } else if (currentTeam.length >= 14) {
        console.log("You've already selected 15 players.");
      }
    });
    return newTeamPlayers;
  };

  const experimentalFilterFunc = (positionFiltered: string) => {
    if (positionFiltered === "") {
      return getAvailablePlayers();
    } else {
      return filterPlayer();
    }
  };




  // const signIn = () => { 
  //   firebase.auth().onAuthStateChanged(provider)
  // }


  return (
    <section className={styles.App}>
      <Navbar />
      <section className={styles.team}>
        <SelectedPlayers
          currentTeam={currentTeam}
          onClick={onclick}
          // unselectPlayer={unselectPlayer}
          // player={player}
        />
      </section>
      <section className={styles.main}>
        <div className={styles.tempClass}>
          <div className={styles.accordionDivHolder}>

          <div className={styles.accordionWrapper}>
      
            <div
              className={`${styles.accordionTitle} ${isOpen ? styles.open : ""}`}
              onClick={() => setOpen(!isOpen)}
              >
                Filter Options
              {/* {title} */}
            </div>
            <div className={`${styles.accordionItem} ${!isOpen ? styles.collapsed : ""}`}>
              <div className={styles.accordionContent}>
              <label>Position</label>
              <select name="position" id="position" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "position": event.target.value})}}>

                <option value="Position">Position</option>
                <option value="Prop">Prop</option>
                <option value="Hooker">Hooker</option>
                <option value="Second Row">Second Row</option>
                <option value="Back Row">Back Row</option>
                <option value="Scrum Half">Scrum Half</option>
                <option value="Fly Half">Fly Half</option>
                <option value="Centre">Centre</option>
                <option value="Wing">Wing</option>
                <option value="Full Back">Full Back</option>
              </select>

              <div>
                <label>
                  Min-height
                </label>
                <input type="number" id="height" name="height" min="50" max="210" placeholder="cm" onChange={(event) => {setPlayerFilterChoices({...playerFilter, "minHeight": event.target.value})}}/>
                <label>
                  Max-height
                </label>
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

              </div>




              </div>
            </div>
          </div>   
            {/* <Accordion title="Filter Players" children="Position" /> */}

          </div>

          {/* <select name="position" id="position" onChange={handleChange}>
            <option value="Prop">Prop</option>
            <option value="Hooker">Hooker</option>
            <option value="Second Row">Second Row</option>
            <option value="Back Row">Back Row</option>
            <option value="Scrum Half">Scrum Half</option>
            <option value="Fly Half">Fly Half</option>
            <option value="Centre">Centre</option>
            <option value="Wing">Wing</option>
            <option value="Full Back">Full Back</option>
          </select> */}
        </div>
        <section className={styles.allCards}>
          {/* <div className={styles.cards}>   */}

          {experimentalFilterFunc(positionFiltered)}
          {/* </div> */}
        </section>
        <section className={styles.Pitch}>
          <div className={styles.PitchImage}>
            <div className={styles.team}>
            <div className={styles.frontRow}>
              {currentTeam.slice(0, 3).map((playerObj) => (
                <div className={styles.ShirtPlayer} key={playerObj.playerName}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>
                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>

                  {/* <p>{playerObj.playerName}</p> */}
                  {/* <p>{playerObj.positionNum[0]}</p> */}
                  {/* <p>{chosenPosition}</p> */}
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
                  {/* <p>{playerObj.positionNum[0]}</p> */}
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
                  {/* <p>{playerObj.positionNum[0]}</p> */}
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
                  {/* <p>{playerObj.positionNum[0]}</p> */}
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
                  {/* <p>{playerObj.positionNum[0]}</p> */}
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
                  {/* <p>{playerObj.positionNum[0]}</p> */}
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
                  {/* <p>{playerObj.positionNum[0]}</p> */}
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>
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
                    <button>Sign IN</button>

          <div>
            {currentTeam.length > 14 && (
              <Button
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
