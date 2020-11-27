import React from "react";
import { LightSpeed } from "react-reveal";
import styles from "./Heading.module.css";

const heading = (props) => {
  return (
    <LightSpeed left>
      <div className={styles.FullHeading}>
        <div className={styles.Heading}>{props.children}</div>
        <div className={styles.HorizontalLine}></div>
      </div>
    </LightSpeed>
  );
};

export default heading;
