import React from "react";
import styles from "./Heading.module.css";

const heading = (props) => {
  return (
    <div className={styles.FullHeading}>
      <div className={styles.Heading}>{props.children}</div>
      <div className={styles.HorizontalLine}></div>
    </div>
  );
};

export default heading;
