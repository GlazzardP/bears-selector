import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
// import Header2 from "./assetts/variables.scss";
import RugbyBall from "./assetts/images/rugby.svg"
import Button from "./components/Button"

function App() {
  return (
    <>
    <section>
      <h2>Test Components</h2>
      <Button btnText='Button' btnImg='/assetts/images/rugby.svg'/>

    </section>
    </>
  );
}

export default App;
