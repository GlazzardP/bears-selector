import React from "react";
import styles from "./LoginPage.module.scss";
import { provider } from "../../firebase";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import facebook from "../../assets/images/facebook.svg"
import apple from "../../assets/images/apple.svg"
import google from "../../assets/images/search.svg"


interface LoginPageProps { 
  signIn(provider: any): any;
  signOut(): any;
  user: any;
  setLoginPage(any): any;
}


const LoginPage:React.FC<LoginPageProps> = ({signIn, signOut, user, setLoginPage}) => {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginDiv}>
        <InputField inputType="email" inputPlaceholder=" Email"/>
        <InputField inputType="password" inputPlaceholder=" Password"/>
        <div>
          <img src={google} alt="Google Login Option" />
          <Button btnText="Google" btnImg={google} handleClick={() => signIn(provider)}/>
          <img src={facebook} alt="Facebook Login Option" />
          <img src={apple} alt="Apple Login Option" />

        </div>
      </div>
    </section>
  );
};

export default LoginPage;
