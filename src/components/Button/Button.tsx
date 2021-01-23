import React from "react";
import { Interface } from "readline";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnText: String;
  btnImg?: string;
  handleClick: () => any;
}

const Button: React.FC<ButtonProps> = ({ btnText, btnImg }) => {
  return (
    <button
      onClick={() => alert("Clicked")}
      className={styles.Button}
      // onClick={handleClick}
    >
      <img src={btnImg} alt="Button Icon" />
      {btnText}
    </button>
  );
};

export default Button;
