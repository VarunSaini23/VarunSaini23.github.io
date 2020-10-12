import React, { Component } from "react";
import MainContent from "../../components/MainContent/MainContent";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Portfolio.module.css";
import Intro from "../../components/MainContent/Intro/Intro";
import background from "../../assets/images/background1.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.backgroundRef = React.createRef();
    this.skillsRef = React.createRef();
    this.experienceRef = React.createRef();
  }

  executeScrollBackground = () => {
    window.scrollTo(
      0,
      this.backgroundRef.current.offsetTop - 100
      //  + this.backgroundRef.current.clientHeight
    );
  };
  executeScrollSkills = () => {
    window.scrollTo(
      0,
      this.skillsRef.current.offsetTop - 100
      // + this.skillsRef.current.clientHeight
    );
  };
  executeScrollExperience = () => {
    window.scrollTo(
      0,
      this.experienceRef.current.offsetTop - 100
      //  + this.experienceRef.current.clientHeight
    );
  };

  render() {
    return (
      <div
        // style={{ backgroundImage: `url(${background})` }}
        className={styles.Portfolio}
      >
        <Intro />
        <Navigation
          backgroundClick={this.executeScrollBackground}
          skillsClick={this.executeScrollSkills}
          experienceClick={this.executeScrollExperience}
          backgroundRef={this.backgroundRef}
          skillsRef={this.skillsRef}
          experienceRef={this.experienceRef}
        ></Navigation>
        <MainContent
          backgroundRef={this.backgroundRef}
          skillsRef={this.skillsRef}
          experienceRef={this.experienceRef}
        ></MainContent>
      </div>
    );
  }
}

export default Portfolio;
