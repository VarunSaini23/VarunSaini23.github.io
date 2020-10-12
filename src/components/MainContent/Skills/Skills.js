import React, { Component } from "react";
import styles from "./Skills.module.css";
import Heading from "../../UI/Heading/Heading";
import javaSvg from "../../../assets/svgs/skillsSVG/java.svg";
import pythonSvg from "../../../assets/svgs/skillsSVG/python.svg";
import Fade from "react-reveal";

class Skills extends Component {
  state = {
    svgLogo: null,
  };

  changeImg = (logo) => {
    let imgLogo = null;
    switch (logo) {
      case "java":
        imgLogo = javaSvg;
        break;
      case "python":
        imgLogo = pythonSvg;
        break;
    }
    this.setState({
      svgLogo: imgLogo,
    });
  };

  render() {
    return (
      <div className={styles.Skills} ref={this.props.skillsRef}>
        <Fade bottom>
          <Heading>02. Skills</Heading>
          <div className={styles.Splitter}>
            <div className={styles.Left}>
              <ul>
                <li>Languages</li>
                <li onMouseOver={() => this.changeImg("java")}>Java</li>
                <li onMouseOver={() => this.changeImg("python")}>Python</li>
                <li onMouseOver={() => this.changeImg("cpp")}>C++</li>
                <li>Dart</li>
                <li>Javascript</li>
              </ul>
              <ul>
                <li>Frameworks</li>
                <li onMouseOver={() => this.changeImg("react")}>React</li>
                <li onMouseOver={() => this.changeImg("flutter")}>Flutter</li>
                <li onMouseOver={() => this.changeImg("django")}>Django</li>
                <li onMouseOver={() => this.changeImg("flask")}>Flask</li>
                <li>XYZ</li>
              </ul>
              <ul>
                <li>Tools</li>
                <li>Android Studio</li>
                <li>Git & Github</li>
                <li>Bash</li>
                <li>Postman</li>
                <li>ABC</li>
              </ul>
              <ul>
                <li>Technologies</li>
                <li>App Dev</li>
                <li>Web Dev</li>
                <li>Blockchain</li>
                <li>Backend</li>
                <li>QWE</li>
              </ul>
            </div>
            {/* <div className={styles.Right}>
              <img src={this.state.svgLogo} />
            </div> */}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Skills;
