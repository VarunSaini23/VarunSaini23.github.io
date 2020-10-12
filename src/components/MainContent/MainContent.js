import React from "react";
import Intro from "../MainContent/Intro/Intro";
import Background from "./Background/Background";
import Skills from "./Skills/Skills";
import styles from "./MainContent.module.css";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const mainContent = (props) => {
  return (
    <div className={styles.MainContent}>
      <Background backgroundRef={props.backgroundRef} />
      <Skills skillsRef={props.skillsRef} />
      <Experience experienceRef={props.experienceRef} />
      <Projects></Projects>
      <Contact />
      <h2>Thank you</h2>
    </div>
  );
};

export default mainContent;
