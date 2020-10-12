import React, { Component } from "react";
import Heading from "../../UI/Heading/Heading";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import varsmovies1 from "../../../assets/images/varsmovies1.jpg";
import onealarm1 from "../../../assets/images/onealarm1.jpg";
import onealarm2 from "../../../assets/images/onealarm2.jpg";
import mediasec from "../../../assets/images/mediasec1.png";
import MoreProject from "./MoreProject/MoreProject";
import Fade from "react-reveal";

class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects}>
        <Fade bottom>
          <Heading>Feauted Projects</Heading>
          <div className={styles.ProjectContainer}>
            <Project
              images={[varsmovies1, onealarm1]}
              title="Varsmovies.com"
              techStacks={["Django", "Bootstrap", "HTML/CSS"]}
            />
            <Project
              images={[onealarm1, onealarm2]}
              title="One Alarm"
              techStacks={["Android", "Java", "XML"]}
            />
            <Project
              images={[mediasec, onealarm2, varsmovies1]}
              title="MediaSec"
              techStacks={[
                "Blockchain",
                "Ethereum",
                "Solidity",
                "Smart Contract",
              ]}
            />
          </div>
          {/* <Project /> */}
          <h2>More Projects</h2>
          <div className={styles.MoreProjectContainer}>
            <MoreProject techStacks={["Java", "android", "Flutter", "MSDOS"]} />
            <MoreProject techStacks={["Java", "android", "Flutter", "MSDOS"]} />
            <MoreProject techStacks={["Java", "android", "Flutter", "MSDOS"]} />
            <MoreProject techStacks={["Java", "android", "Flutter", "MSDOS"]} />
          </div>
        </Fade>
      </div>
    );
  }
}

export default Projects;
