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
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>Dart</li>
                <li>SQL</li>
              </ul>
              <ul>
                <li>Frameworks</li>
                <li>React</li>
                <li>Flutter</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Node</li>
              </ul>
              <ul>
                <li>Tools</li>
                <li>Android Studio</li>
                <li>Git & Github</li>
                <li>Bash</li>
                <li>Postman</li>
                <li>MongoDB</li>
              </ul>
              <ul>
                <li>Technologies</li>
                <li>(Native+Hybrid) App Dev</li>
                <li>Web Development</li>
                <li>Blockchain</li>
                <li>Backend</li>
                {/* <li>QWE</li> */}
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
