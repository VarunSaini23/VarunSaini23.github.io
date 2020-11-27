import React, { Component } from "react";
import Heading from "../../UI/Heading/Heading";
import styles from "./Experience.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Fade from "react-reveal";
import ExperienceText from "./ExperienceText/ExperienceText";


const EXPERIENCES = [
  {
    "heading": "Mobile App Developer Intern @ Eventgraphia",
    "duration": "March 2019 to April 2019",
    "location": "Gurugram",
    "textArr": [
      "was given a task to change their app codebase to follow MVVM architecture pattern",
      "built some important features which in return boosted their bussiness",
      "learned a lot and gained experience by working in a Startup based environment.",
      "got to work with the minds and core of the company"
    ]
  },
  {
    "heading": "Software Developer Intern @ DRDO",
    "duration": "May 2019 to June 2019",
    "location": "Chandigarh",
    "textArr": [
      "was given a task to develop a web portal for their Hindi Language Department",
      "learned the core of Web Development and used HTML/CSS/JS/Bootstrap for frontend and PHP for backend",
      "got to attend meetings with the superiors of the Hindi Department regarding the needs and expectations from the portal",
      "followed AGILE model for the development of the portal"
    ]
  },
  {
    "heading": "App Developer @ DSC-VIT",
    "duration": "December 2018 to November 2019",
    "location": "VIT, Vellore",
    "textArr": [
      "developed few Apps under the club including official apps for Club events",
      "was part of a team which organised few world class Hackathons like WomenTechies and Google DevFest",
      "also developed few Web development Projects using Python, mainly Django.",
    ]
  },
  {
    "heading": "Open Source Contributor @ FOSSASIA",
    "duration": "January 2019 - Present",
    "location": "Remote",
    "textArr": [
      "actively contributing toward the development of a project named Open Event Attendee App",
      "working along with more than 50 developers from all around the globe.",
      "fixing bugs and publishing timed updates",
    ]
  },
  {
    "heading": "JP morgan virtual Internship",
    "duration": "July 2020 to Sept. 2021",
    "location": "Remote",
    "textArr": [
      "used JP Morgan Chase framework 'Perspective' which provided an ultimate way to analyze and visualize the firm's trading floor data",
      "fixed the broken client datafeed script written in Python, Integrated and piped data into Perspective Framework",
      "Used Perspective Framework to improve the overall performance of the app and provide traders with suitable data."
    ]
  },
]

class Experience extends Component {
  selectExperience = (id) => {
    console.log(id);
  };

  constructor(props) {
    super(props);
    this.listItemRef = React.createRef();
    this.leftRef = React.createRef();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    experienceIdx: 0,
    expBool: true,
    experiences: [
      "Eventgraphia",
      "DRDO",
      "DSC-VIT",
      "FOSSASIA (Open Source)",
      "JP Morgan Virtual Internship",
    ],
    sliderTopValue: 0,
    listItemHeight: 48.8,
  };

  changeExperienceIndex = (id) => {
    this.setState({ experienceIdx: id, expBool: false });
    this.setState({
      sliderTopValue: id * 48.8,
    });
    console.log(id + " " + this.state.experienceIdx);
  };

  componentDidMount = () => {
    const listStyle = getComputedStyle(this.listItemRef.current);
    console.log("Height", listStyle.height);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ fullWindowWidth: window.innerWidth });
  }

  render() {
    let slider;
    let horizonalLines = false;
    if (this.state.fullWindowWidth <= 760) {
      // console.log(this.state.fullWindowWidth);
      horizonalLines = true;
      slider = null;
    } else {
      slider = (
        <div
          style={{
            top: this.state.sliderTopValue + "px",
            height: this.state.listItemHeight + "px",
          }}
          className={styles.SliderVertical}
        ></div>
      );
    }

    const listItems = this.state.experiences.map((item, idx) => {
      const classes = [styles.ListItem];
      if (idx === this.state.experienceIdx) {
        classes.push(styles.Active);
      }

      return (
        // <CSSTransition
        //   key={idx}
        //   in={this.state.expBool || this.state.experienceIdx === idx}
        //   // mountOnEnter
        //   // unmountOnExit
        //   classNames="fade"
        //   timeout={500}
        //   // appear
        // >
        <div
          key={idx}
          ref={this.listItemRef}
          className={classes.join(" ")}
          onClick={() => this.changeExperienceIndex(idx)}
        >
          {item}
        </div>
        // </CSSTransition>
      );
    });

    return (
      <div ref={this.props.experienceRef} className={styles.Experience}>
        <Fade bottom>
          <Heading>3. Work Experience</Heading>
          <div className={styles.Splitter}>
            {slider}
            <div className={styles.Left}>
              {horizonalLines ? (
                <div className={styles.HorizontalLine}></div>
              ) : null}
              <div ref={this.leftRef} className={styles.LeftList}>
                {listItems}
              </div>

              {horizonalLines ? (
                <div className={styles.HorizontalLine}></div>
              ) : null}
            </div>
            <div className={styles.Right}>
              <ExperienceText experienceInfo={EXPERIENCES[[this.state.experienceIdx]]}/>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Experience;
