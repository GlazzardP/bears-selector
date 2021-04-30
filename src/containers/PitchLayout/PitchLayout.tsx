import React, {useEffect, useState} from "react";
import { IPlayer } from "../../data/data";
import styles from "./PitchLayout.module.scss";

// styles, images and assets
// import imageee from "../../assets/images/Rugby_union_pitch.svg";
import close from "../../assets/images/Icons/enter-arrow.svg";


interface PitchLayoutProps { 
  currentTeam: IPlayer[];
  getSurname(playerObj: IPlayer): string; 


}
const PitchLayout: React.FC<PitchLayoutProps> = ({currentTeam, getSurname}) => {
  const [loginRecommendationModal, setLoginRecommendation] = useState<boolean>(true);
  const [noSubmitBubble, setSubmitBubble] = useState<boolean>(false);

  const submissionBubble = () => { 
    if (currentTeam.length > 14) { 
    return setSubmitBubble(!noSubmitBubble)
  } else { 
    console.log('bar');
  }
}

useEffect(() => { 
  submissionBubble()
}, currentTeam)
    


  return (
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
              <div>              
                {currentTeam.slice(5, 6).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
                ))}
              </div>

              <div>              
                {currentTeam.slice(6, 7).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                  <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
                ))}
              </div>

            </div>

            <div className={styles.numberEight}>
              {currentTeam.slice(7, 8).map((playerObj) => (
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
              {currentTeam.slice(11, 13).map((playerObj) => (
                <div className={styles.ShirtPlayer}>
                 <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                  <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                    playerObj
                  )}`}</p>
                </div>
              ))}
            </div>

            <div className={styles.wings}>

                <div className={styles.leftWing}>
                {currentTeam.slice(10, 11).map((playerObj) => (
                  <div className={styles.ShirtPlayer}>
                   <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                    <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                      playerObj
                    )}`}</p>
                  </div>
                ))}
              </div>
              <div className={styles.rightWing}>
                  {currentTeam.slice(13, 14).map((playerObj) => (
                    <div className={styles.ShirtPlayer}>
                       <p className={styles.shirtNumber}>{currentTeam.indexOf(playerObj) + 1}</p>

                      <p>{`${playerObj.playerName.charAt(0)}. ${getSurname(
                        playerObj
                      )}`}</p>
                    </div>
                  ))}
              </div>

            </div>

            <div className={styles.fullBack}>
                  {currentTeam.slice(14, 15).map((playerObj) => (
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
          {/* <div className={`${styles.loginRecommendationModal} ${loginRecommendationModal ? styles.yesLoginRecommendation : styles.noLoginRecommendation}`}> */}

          <div className={`${styles.noSubmitBubble} ${noSubmitBubble? styles.noSubmitBubble : styles.yesSubmitBubble }`}>
            <p>Well done, you have chosen your Bristol Bears XV. You can either submit and checkout some stats or you can carry on editing your Bears.</p>
            <img src={close} alt="" onClick={() => {setSubmitBubble(!noSubmitBubble)}}/>
            {/* <img src={close} alt="" onClick={() => {alert('clicked close')}}/> */}

          </div>

        </section>   
  );
};

export default PitchLayout;
