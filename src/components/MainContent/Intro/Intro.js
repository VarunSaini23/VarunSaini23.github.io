import React, { Component } from "react";
import styles from "./Intro.module.css";
import handWave from "../../../assets/images/handWave.png";
import bitmojilappy from "../../../assets/images/bitmojilappy.png";
import bitmojihi from "../../../assets/images/bitmojihi.png";
import classes from "./Intro.module.css";
import TextTransition, { presets } from "react-text-transition"; 

const replaceTxtArray = [
  "Web Developer",
  "Android Developer",
  "Python enthusiast",
  "Content Creator on Youtube",
  "Open Source Creator",
  "Cricketer by Hobby",
];
class Intro extends Component {
  constructor(props) {
    super(props);
    this.firstRef = React.createRef();
    this.secondRef = React.createRef();
    this.thirdRef = React.createRef();
    this.forthRef = React.createRef();
  }

  state = {
    textIdx: 0,
    firstClass: false,
    secondClass: false,
    thirdClass: false,
    forthClass: false,
  };

  componentDidMount = () => {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);

    this.firstTimeout = setInterval(() => {
      this.setState({ firstClass: true });
    }, 1000);

    this.secondTimeout = setInterval(() => {
      this.setState({ secondClass: true });
    }, 2000);

    this.thirdTimeout = setInterval(() => {
      this.setState({ thirdClass: true });
    }, 3000);

    this.forthTimeout = setInterval(() => {
      this.setState({ forthClass: true });
    }, 400);
  };

  componentWillUnmount = () => {
    clearInterval(this.timeout);
    clearInterval(this.firstTimeout);
    clearInterval(this.secondTimeout);
    clearInterval(this.thirdTimeout);
  };

  render() {
    let textThatChanges =
      replaceTxtArray[this.state.textIdx % replaceTxtArray.length];

    const firstClass = [styles.First];
    const secondClass = [styles.Second];
    const thirdClass = [styles.SubIntro];

    if (this.state.firstClass) {
      firstClass.push(styles.Show);
    }
    if (this.state.secondClass) {
      secondClass.push(styles.Show);
    }
    if (this.state.thirdClass) {
      thirdClass.push(styles.Show);
    }

    return (
      <div className={styles.Intro}>
        {/* <div className={styles.HalfParas}> */}
        <div className={styles.Left}>
          <p className={firstClass.join(" ")} ref={this.firstRef}>
            <span className={styles.Hi}>Hello World!</span>{" "}
            <img src={handWave} className={styles.WaveHand} />
            {/* style={{ backgroundImage: handWave }} */}
            {/* classNames={styles.WaveHand} */}
            {/* ></span> */}
          </p>
          <div className={secondClass.join(" ")} ref={this.secondRef}>
            I am <span className={styles.Name}>Varun Saini, </span>
              <TextTransition className={styles.ChangingText} text={textThatChanges} inline={true} springConfig={presets.default} />
            <br />
            at Continous Composites
          </div>
          <p className={thirdClass.join(" ")} ref={this.thirdRef}>
            I'm a Product-minded Developer, passionate about
            developing great products. I believe in the concept of <i>Thinking more and typing less</i>.
          </p>
          <div>
            <div className={classes.GetInTouchButton}
            onClick={() => window.open("mailto:imvarun23@gmail.com", "_self")}
            >Get In Touch</div>
            <div className={classes.Resume}
              onClick={() => window.open("https://drive.google.com/file/d/1ut4UQYgKzWvnNkvQr4FaQOW1jEHhIGfl/view?usp=sharing", "_blank")}>
              Resume
              </div>
          </div>
        </div>

        <div className={styles.Right}>
          <img src={bitmojihi} />
        </div>
      </div>
      // </div>
    );
  }
}

export default Intro;
