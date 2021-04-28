import React from "react";
// import firebase from "./firebase";

import * as firebase from 'firebase/app';
import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
import provider from "./firebase";

import styles from "./App.module.scss";

// Containers 
import Routes from "./containers/Routes"


function App() {

  
  // const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun, NAdeolokun,NAdeolokun]);
  // const [currentTeam, addPlayerToTeam] = useState<IPlayer[]>([]);

  // const [updatedTeam, setUpdatedTeam] = useState<IPlayer[]>([]);
  // const [playerFilter, setPlayerFilterChoices] =useState<any>({})
  // const [positionFiltered, setFilteredPosition] = useState<string>("");

  // const [availablePlayers, setAvailablePlayersRedundant] =useState<IPlayer[]>([])

  // const [isOpen, setOpen] = useState<boolean>(false);
  // const [loginRecommendationModal, setLoginRecommendation] = useState<boolean>(true);



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

  // const setPlayer = (player: IPlayer) => {
  //   if (currentTeam.includes(player)) {
  //     return alert("This player is already selected.");
  //   } else if (currentTeam.length > 14) {
  //     alert("You've already got a full team.");
  //   // } 
  //   // else (
  //   //   console.log(currentTeam.length + 1)
  //   // )
  //   } else if (
  //     currentTeam.length + 1 !== player.positionNum[0] ||
  //     currentTeam.length + 1 !== player.positionNum[1] ||
  //     currentTeam.length + 1 !== player.positionNum[2] ||
  //     currentTeam.length + 1 !== player.positionNum[3] ||
  //     currentTeam.length + 1 !== player.positionNum[4]) {
  //       // alert("This player cannot play in this position.")
  //       //  console.log(currentTeam.length + 1)

  //     addPlayerToTeam([...currentTeam, player]);
  //   } else (
  //       addPlayerToTeam([...currentTeam, player])
  //   )
  //   return currentTeam; // Was working without this return ?? 
  // };


  // const getSurname = (playerObj: IPlayer) => {
  //   const surname = playerObj.playerName.split(" ")[1];
  //   return surname;
  // };

  // const getTeamScoreJsx = (type: any) => {
  //   const currentTeamArray = currentTeam.filter((playerObj) => {
  //     return playerObj.hasOwnProperty(type);
  //   });
  //   let scoreArray = currentTeamArray.map((playerObj: any) => playerObj[type]);

  //   let scoreSum = scoreArray.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   }, 0);
  //   return Math.floor(scoreSum / currentTeamArray.length) || 0;
  // };


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


  // const getAvailablePlayers = () => {
  //   // const teamPlayers = players;

  //   const availablePlayers = players.map((player) => {
  //     if (
  //       !currentTeam.includes(player) && 
  //     Object.entries(playerFilter).length === 0
  //     ) {
  //       return (
  //         <Card
  //           key={player.playerName}
  //           player={player}
  //           setPlayer={setPlayer}
  //         />
  //         // console.log('foo')
  //       );

  //     } else if (
  //       !currentTeam.includes(player) &&  // They are not in the team
  //       Object.entries(playerFilter).length !== 0 && // Any filter has been set
  //       playerFilter.position === player.position && // Position is the same  users choice
  //       playerFilter.minHeight <= player.playerHeight && // Height is the same or greater than users choice
  //       playerFilter.maxHeight >= player.playerHeight && // Height is the less than or equal than users choice
  //       playerFilter.defence <= player.defending// Defending is as required
  //       // getFilteredAvailablePlayers()
  //     ) { 
  //       return ( 
  //         <Card
  //         key={player.playerName}
  //         player={player}
  //         setPlayer={setPlayer}
  //       />
  //       )
  //     } else if (currentTeam.length >= 14) {
  //       console.log("You've already selected 15 players.");
  //     }
  //   });
  //   return availablePlayers;
  // };


  // const signIn = (provider: any) => { 
  //   firebase.auth().onAuthStateChanged(provider)
  // }


  return (
    <Routes />
  );
}

export default App;
