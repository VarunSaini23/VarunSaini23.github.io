import React from "react";
import styles from "./Background.module.css";
import Heading from "../../UI/Heading/Heading";
import myPic from "../../../assets/images/me.jpg";
import Fade from "react-reveal/Fade";

const background = (props) => {
  return (
    <div ref={props.backgroundRef} className={styles.Background}>
      <Fade bottom>
        <div className={styles.Left}>
          <Heading>01. Background</Heading>
          <div>
            I began my Career Exploration with a blank Canvas in 2017. With
            time, I explored a bunch of things by getting my hands dirty in
            different domains through different internships and Personal
            projects. All I wanted was to connect together diverse interests of
            mine.
          </div>
          <div>
            Product Management is a field that helps me do that since I look at
            myself at the epicenter of business, technology, and UI/UX. I am
            passionate for building and envisioning great products. My
            compentence with Front-end development, strategic product mindset
            and entrepreneurial acumen enables me to achieve the vision I have
            for my career. Along with motivating me to push my limits.
          </div>
          <div>
            Things I do when I am not working: Painting and Illustrating Reading
            Psychological blogs Petting Dogs Building Communities Writing
            Fictional Stories Binge watching videos about Art and Philosophy
          </div>
        </div>

        <div className={styles.Right}>
          <img src={myPic} alt="Its me" />
        </div>
      </Fade>
    </div>
  );
};

export default background;
