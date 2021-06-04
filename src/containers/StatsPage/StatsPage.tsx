import React, { useEffect, useState } from "react";
// import styles from "./StatsPage.module.scss";
import 'firebase/firestore'; // import {firestore} from 'firebase/app'; does not import firestore code
import { firestore } from "../../firebase";
import { IPlayer } from "../../data/data";

const StatsPage: React.FC = () => {
  // const [pickedPlayers, addPickedPlayers] = useState([]);
  const [submittedTeams, setSubmittedTeams] =useState<IPlayer[]>([])
  // let playerAppearances = {};

  const getSubmitedTeams = () => {
    firestore
      .collection("team")
      .get()
      .then((querySnapshot) => {
        // let submittedTeams: IPlayer[] = [];
        
        querySnapshot.forEach((doc: any) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          doc
            .data()
            .currentTeam.forEach((player: IPlayer) => {
              submittedTeams.push(player)

            }
            );
        });
      });
    };
  


  useEffect(() => { 
    getSubmitedTeams()
  }, [])

  return (
    <>
      <p>StatsPage works</p>
      {
        submittedTeams.map((player) => { 
          return ( 
          <p key={player.playerName}>{player.playerName}</p>
          )
        })

      }
    </>
  );
};

export default StatsPage;
