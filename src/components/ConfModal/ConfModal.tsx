import React from "react";
import styles from "./ConfModal.module.scss";


interface ConfModalProps { 
  toggleConfModal: (value: boolean) => void;
  togglePitchPage: (value: boolean) => void;

}

const ConfModal: React.FC<ConfModalProps> = ({toggleConfModal, togglePitchPage}) => {
  return (

    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <p
          onClick={() => {
            togglePitchPage(false);
            toggleConfModal(false);
          }}
        >
          Go To Stats
        </p>
        <button onClick={() => toggleConfModal(false)}>Close</button>
      </div>
    </div>   
  );
};

export default ConfModal;
