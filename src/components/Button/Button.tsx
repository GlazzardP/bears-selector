import React from "react";
import { Interface } from "readline";
import styles from "./Button.module.scss";

interface Props { 
  btnText: String,
  btnImg: string;
}


const Button: React.FC<Props> = ({btnText, btnImg}) => {
  return (
    <button onClick={() => alert('Clicked')} className={styles.Button}><img src={btnImg}/>{btnText}</button>
  );
};

export default Button;
