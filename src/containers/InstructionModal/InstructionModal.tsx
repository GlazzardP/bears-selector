import React, { useEffect, useState} from "react";
import styles from "./InstructionModal.module.scss";

interface InstructionModalProps { 
  removeOverlay:() => any;
}

const InstructionModal: React.FC<InstructionModalProps> = () => {

  return (
    <div className={styles.overlayBackground}>

    </div>
  );
};

export default InstructionModal;

// const { useState } = React;

const stopProp = (e: Event) => {
  e.stopPropagation();
};

// const LoginOverlay = ({ removeOverlay }) => {

//   return (
//     <div className={styles.overlayBackground} onClick={(e) => removeOverlay()}>
//       <div className={styles.overlayCard} onClick={(e) => stopProp(e)}>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             removeOverlay();
//           }}
//         >
//           <button className="formSubmit" 
//           // type="sbmit"
//           >
//             Noverlay
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const NoAuthWebsite = () => {
//   const [overlay, setOverlay] = useState(false);

//   return (
//     <div className={styles.flexColumn}>
//       <div className={overlay ? "overlayShown" : "overlayHidden"}>
//         <LoginOverlay removeOverlay={() => setOverlay(false)} />
//       </div>
      
//       <div className="loginButton" onClick={() => setOverlay(true)}>
//         Overlay
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<NoAuthWebsite />, document.getElementById("root"));
