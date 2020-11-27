import React from "react";
import styles from "./Project.module.css";
import { ReactComponent as GithubSVG } from "../../../../assets/svgs/projectsSVG/github.svg";
import { ReactComponent as LinkSVG } from "../../../../assets/svgs/projectsSVG/link.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Component } from "react";
import { CSSTransition } from "react-transition-group";

class Project extends Component {
  state = {
    imageOverLay: false,
  };

  render() {
    console.log(this.state.imageOverLay);
    const allTechStacks = this.props.techStacks.map((value, index) => {
      return <div key={index} id={index}>{value}</div>;
    });

    const allTexts = this.props.text.map((value, idx) => {
      return <li id={idx} key={idx}>{value}</li>;
    });

    const allCarousalImages = this.props.images.map((value, index) => {
      return (
        <div key={index} className={styles.ImageContainer} id={index}>
          <div
            className={styles.SeeMore}
            onClick={() => this.setState({ imageOverLay: true })}
          >
            What's this
          </div>
          <img src={value} />
        </div>
      );
    });

    return (
      <div className={styles.Project2}>
        <div className={styles.CorousalContainer}>
          <CSSTransition
            in={this.state.imageOverLay}
            timeout={500}
            classNames="fade"
            mountOnEnter
            unmountOnExit
          >
            <div className={styles.CorousalOverlay}>
              <div className={styles.ForPadding}>
                <div
                  className={styles.BackButton}
                  onClick={() => this.setState({ imageOverLay: false })}
                >
                  Back
                </div>
                <div className={styles.OverlayTitle}>{this.props.title}</div>
                <div className={styles.OverlayText}>
                  <ol>{allTexts}</ol>
                </div>
                <div className={styles.Icons}>
                  <div className={styles.GITHUB} onClick={() => window.open(this.props.gitLink,"_blank")}>View on Github</div>
                  <div className={styles.LIVE} onClick={() => window.open(this.props.liveLink,"_blank")}>View LIVE !</div>
                  {/* <GithubSVG className={styles.SVG} />
                  <LinkSVG className={styles.SVG} /> */}
                </div>
                <div className={styles.TechStack}>{allTechStacks}</div>
              </div>
            </div>
          </CSSTransition>
          <Carousel className={styles.Carousal} renderThumbs={() => null}>
            {allCarousalImages}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Project;
