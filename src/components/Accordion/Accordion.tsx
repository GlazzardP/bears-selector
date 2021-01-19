import React, { useState } from "react";
import styles from "./Accordion.module.scss";



  interface AccordionProps {
    title: string;
    children: any;
  }

const Accordion: React.FC<AccordionProps> = ({title, children} ) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.accordionWrapper}>
      
      <div
        className={`${styles.accordionTitle} ${isOpen ? styles.open : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`${styles.accordionItem} ${!isOpen ? styles.collapsed : ""}`}>
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>    
  );
};

export default Accordion;