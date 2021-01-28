import React, { useEffect, useState} from "react";
import styles from "./InstructionModal.module.scss";

interface InstructionModalProps { 
  toggleInstructionModal:(input: boolean) => any;
  instructionModa: boolean;
}

const InstructionModal: React.FC<InstructionModalProps> = ({toggleInstructionModal, instructionModa}) => {

  return (
    <section className={styles.instructionModalContainer} onClick={() => toggleInstructionModal(false)}>
      <div className={styles.instructionModalBox}>
        <h2>Instructions</h2>
        <p>We have build this website for rugby fans, especially Bristol Bear fan to pick their favourite team.</p>
        <p>1. We recommend logging in. This means you can submit your team to our database. The more people who do this, the better we can see who the preferred players are.<br></br>To log in, you can use your Gmail account, Facebook or create your own account with your email and password. </p>
        <p>2. Pick your 15. It's pretty simple. You can use the filter tool at the top of the players to find the right player for the right position.</p>
        <p>3. Each player is listed with their potential playing positions. So you can choose where you want them to play.</p>
        <p>4. Once you have picked your 15, you can submit your team. I wouldn't go calling myself Pat Lam just yet!</p>
        <p>5. You can know see how many times each player has been picked.</p>

        <p>Moving forward we want to be able to include more information and more insights but this is largely dependant on your support. No, not financial. Just spreading the word. Either by the good ol' fashion way, by mouth or, once you have submitted your team, you can share on all the horrible social media platforms.</p>


        <button onClick={() => {toggleInstructionModal(false)}}>Close</button>
      </div>
    </section>
  );
};

export default InstructionModal;
