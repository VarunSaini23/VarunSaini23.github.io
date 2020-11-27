import React from "react";
import styles from "./ThankYou.module.css";
import bitmojiThankU from "../../../assets/images/bitmojithanku.png";

const thankYou = (props) => {
  return (
    <div className={styles.ThankYou}>
      <div className={styles.DevelopedText}>
        Designed & Developed by <br /> Vaun Saini 🤖 using React, 2020
      </div>
      <div className={styles.ThankYouBitmoji}>
        <img src={bitmojiThankU} />
      </div>
    </div>
  );
};

export default thankYou;
