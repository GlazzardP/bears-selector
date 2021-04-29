import React from "react";
// import { Interface } from "readline";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnText: string;
  btnImg?: string;
  handleClick: (provider: any) => any;


}

const Button: React.FC<ButtonProps> = ({ btnText, btnImg, handleClick}) => {
  return (
    <button
      className={styles.Button}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
