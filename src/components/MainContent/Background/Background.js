import React from "react";
import styles from "./Background.module.css";
import Heading from "../../UI/Heading/Heading";
import myPic from "../../../assets/images/me.jpg";
import Fade from "react-reveal/Fade";
import bitmojilappy from "../../../assets/images/bitmojilappy.png";

const background = (props) => {
  return (
    <div>
      <Heading>01. Background</Heading>
      <div ref={props.backgroundRef} className={styles.Background}>
        <Fade bottom>
          <div className={styles.Left}>
            <div>
              I am a Final year Undergraduate Student currently persuing Information Technology from Vellore Institute of Technology(VIT), Vellore, Tamil Nadu, India.
              I have actively participated in many Hackathons and Codathons and won few of them during my undergraduate. I am an open source contributor, contributing majorly for FOSSASIA on Github.
            </div>
            <p></p>
            <div>
              I like to solve problems using crictical thinking by applying concepts of <i>Data Structure and Algorithm</i> and <i>Computer Science Fundamentals</i>. I am also a competitive coder.
              Recently I participated in Google's HashCode and Codejam and qualified for the next rounds.
            </div>
            <p></p>
            <div>
              Things I do when I am not working: Playing or watching Cricket and football, Listening music, Binge watching some TV series, Cooking, Writing fictional stories.
            </div>

            <div style={{textAlign:"right"}}><i>Think more, type less</i></div>
          </div>

          <div className={styles.Right}>
            <img src={bitmojilappy} alt="Its me" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default background;
