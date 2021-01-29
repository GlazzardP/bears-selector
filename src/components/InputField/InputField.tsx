import React from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps { 
  inputType: string;
  inputPlaceholder?: string;
  inputID?: string;
  inputName?: string;

}
const InputField: React.FC<InputFieldProps> = ({inputType, inputPlaceholder, inputID, inputName}) => {
  return (
    <input type={inputType} placeholder={inputPlaceholder} id={inputID} name={inputName} className={styles.inputField} />
  );
};

export default InputField;
