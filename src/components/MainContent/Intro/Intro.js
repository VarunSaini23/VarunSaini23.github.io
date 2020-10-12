import React from "react";
import styles from "./Intro.module.css";

const intro = (props) => {
  return (
    <div className={styles.Intro}>
      <p>
        Hello, World, i am{" "}
        <span className={styles.Name}>Varun Saini YUP I KNOW</span>
      </p>
      <div className={styles.HalfParas}>
        <p className={styles.Left}>
          I'm a Product-minded Developer, Open Source Creator passionate about
          envisioning and developing great products. I am exploring my interest
          along the lines of Product Management and Development.
        </p>
        <p className={styles.Right}></p>
      </div>
      <div className={styles.HalfParas}>
        <p className={styles.Left}>
          I often write case studies to share my thoughts about different
          products. Along with documenting my journey as I learn and build new
          stuff.
        </p>
        <p className={styles.Right}></p>
      </div>
    </div>
  );
};

export default intro;
