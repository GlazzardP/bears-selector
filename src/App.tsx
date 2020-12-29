import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
// import Header2 from "./assetts/variables.scss";
// import RugbyBall from "./assetts/images/rugby.svg";
// import Button from "./components/Button";
import Card from "./components/Card";
import SelectedPlayers from "./components/SelectedPlayers";
// import Steven from "./assetts/images/steven-luatua_30-removebg-preview.png";
import Navbar from "./components/Navbar";

import players, { initialTeam, IPlayer } from "./data/data";
import DummyPlayer from "./data/data";
import Button from "./components/Button";


import filter from "./assets/images/filter.svg"
import dropDown from "./assets/images/arrow-down-sign-to-navigate.svg"


function App() {
  const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);
  // const [showPlayers, setShowPlayers] = useState<IPlayer[]>([]);
  // const [chosenPosition, setChosenPosition] = useState<number>(1);
  const [updatedTeam, setUpdatedTeam] = useState<IPlayer[]>([]);
  const [positionFiltered, setFilteredPosition] = useState<string>("")

  console.log(currentTeam);

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
      // } else if (currentTeam.length > 14) {
      //   return alert("You have a full team already.");
      // } else {
    } else if (currentTeam.length > 14) {
      alert("You've already got a full team.");
    } else {
      addPlayerToTeam([...currentTeam, player]);
    }
    // const teamAlreadySelected = [...currentTeam];
    // addPlayerToTeam(teamAlreadySelected[player.positionNum[0]]);
  };

  const getAvailablePlayers = () => {
    const teamPlayers = players;

    const newTeamPlayers = teamPlayers.map((player) => {
      if (!currentTeam.includes(player)) {
        return (
          // <div className={styles.Cards}>
          <Card
            key={player.playerName}
            player={player}
            setPlayer={setPlayer}
            // updateTeam={updateTeam}
          />
          // </div>
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

  const handleChange = (e: any) => {
    setFilteredPosition(e.target.value);
  };

  const teamDefenseScoreJsx = () => { 
    const teamDefenseScore = currentTeam.map((player) => {
    return ( 
      player.defending
  )})
    }


  const filterPlayer = ( ) => { 
    const teamPlayers = players;

    const newTeamPlayers = teamPlayers.map((player) => {
      if (!currentTeam.includes(player) && positionFiltered === player.position ) { // Need to change this so if any number within positionNum array matches, the player will show
        return (

          <Card
            key={player.playerName}
            player={player}
            setPlayer={setPlayer}
          />

        );

      } else if (currentTeam.length >= 14) {
        console.log("You've already selected 15 players.");
      }
    });
    return newTeamPlayers;
  }



  const experimentalFilterFunc = (positionFiltered: string) => { 
    if (positionFiltered === "") { 
      return getAvailablePlayers();
    } else { 
      return filterPlayer()
    }
  }
  

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
             <select name="position"
                    id="position"
                    onChange={handleChange}>
              {/* <option value="All">All</option> */}

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
          </div>
        <section className={styles.allCards}>



          {/* <div className={styles.cards}>   */}
            {experimentalFilterFunc(positionFiltered)}
          {/* </div> */}
       
        </section>
        <section className={styles.Pitch}>
          <div className={styles.PitchImage}>
          <div className={styles.frontRow}>
            {currentTeam.slice(0, 3).map((playerObj) => (
              <div className={styles.ShirtPlayer} key={playerObj.playerName}>
                <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                  playerObj
                )}`}</p>

                {/* <p>{playerObj.playerName}</p> */}
                <p>{playerObj.positionNum[0]}</p>
              </div>
            ))}
          </div>

          <div className={styles.secondRow}>
            {currentTeam.slice(3, 5).map((playerObj) => (
              <div className={styles.ShirtPlayer}>
                <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                  playerObj
                )}`}</p>
                <p>{playerObj.positionNum[0]}</p>
              </div>
            ))}
          </div>

          <div className={styles.backRow}>
            {currentTeam.slice(5, 15).map((playerObj) => (
              <div className={styles.ShirtPlayer}>
                <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                  playerObj
                )}`}</p>
                <p>{playerObj.positionNum[0]}</p>
              </div>
            ))}
          </div>
          </div>

        </section>
        <div className={styles.teamScore}>
          <div>          
            <p>Defense: 85</p>
            <p>Defense: 85</p>
            <p>Attacking: 85</p>
            <p>Fitness: 85</p>
            <p>Experience: 85</p>  </div>
     

          <div>     
             {currentTeam.length > 14 &&
                <Button btnText="Submit team" handleClick={() => alert('Submit team')}/>
            }
          </div>

        </div>
      </section>
    </section>
  );
}

export default App;
