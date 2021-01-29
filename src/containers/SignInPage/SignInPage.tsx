import React from "react";
import styles from "./SignInPage.module.scss";

import InputField from "../../components/InputField"

const SignInPage = () => {
  return (
    <section className={styles.signInPage}>
      <div className={styles.signInDiv}>
        <h2>Sign In </h2>
        <div>
          <InputField inputType="text" inputPlaceholder="Email"/>
          <InputField inputType="text" inputPlaceholder="Password"/>

        </div>
      </div>
    </section>
  );
};

export default SignInPage;
