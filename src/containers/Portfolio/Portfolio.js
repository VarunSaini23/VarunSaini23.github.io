import React, { Component } from "react";
import MainContent from "../../components/MainContent/MainContent";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Portfolio.module.css";
import Intro from "../../components/MainContent/Intro/Intro";
import background from "../../assets/images/background1.jpg";
import { ReactComponent as FacebookSVG } from "../../assets/svgs/socialLinksSVG/facebook.svg";
import { ReactComponent as GithubSVG } from "../../assets/svgs/socialLinksSVG/github.svg";
import { ReactComponent as InstagramSVG } from "../../assets/svgs/socialLinksSVG/instagram.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/svgs/socialLinksSVG/linkedin.svg";
import { ReactComponent as TelegramSVG } from "../../assets/svgs/socialLinksSVG/telegram.svg";
import { ReactComponent as WhatsappSVG } from "../../assets/svgs/socialLinksSVG/whatsapp.svg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.backgroundRef = React.createRef();
    this.skillsRef = React.createRef();
    this.experienceRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
    this.socialLinksRef = React.createRef();
    this.state = {
      socialIsVisible: false,
    };
  }

  componentDidMount = () => {
    this.socialTimeout = setInterval(() => {
      this.setState({ socialIsVisible: true });
    }, 4000);
  };

  executeScrollBackground = () => {
    window.scrollTo(
      0,
      this.backgroundRef.current.offsetTop - 2 * 100
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
  executeScrollProjects = () => {
    window.scrollTo(
      0,
      this.projectsRef.current.offsetTop - 100
      //  + this.experienceRef.current.clientHeight
    );
  };
  executeScrollContact = () => {
    window.scrollTo(
      0,
      this.contactRef.current.offsetTop - 100
      //  + this.experienceRef.current.clientHeight
    );
  };

  render() {
    const socialLinksClasses = [styles.SocialLinks];
    if (this.state.socialIsVisible) {
      socialLinksClasses.push(styles.Show);
    }

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
          projectsClick={this.executeScrollProjects}
          contactClick={this.executeScrollContact}
          backgroundRef={this.backgroundRef}
          skillsRef={this.skillsRef}
          experienceRef={this.experienceRef}
          projectsRef={this.projectsRef}
          contactRef={this.contactRef}
        ></Navigation>
        <MainContent
          backgroundRef={this.backgroundRef}
          skillsRef={this.skillsRef}
          experienceRef={this.experienceRef}
          projectsRef={this.projectsRef}
          contactRef={this.contactRef}
        ></MainContent>

        <p className={socialLinksClasses.join(" ")} ref={this.socialLinksRef}>
          <GithubSVG className={styles.SocialLink} onClick={()=> window.open("https://github.com/VarunSaini23","_blank")}/>
          <LinkedinSVG className={styles.SocialLink} onClick={()=> window.open("https://www.linkedin.com/in/varunsaini23/","_blank")}/>
          <WhatsappSVG className={styles.SocialLink} onClick={()=> window.open("https://wa.me/919877205937","_blank")}/>
          <TelegramSVG className={styles.SocialLink} onClick={()=> window.open("https://t.me/VarunSaini23","_blank")}/>
          <InstagramSVG className={styles.SocialLink} onClick={()=> window.open("https://www.instagram.com/_imvarun_/","_blank")}/>
          <FacebookSVG className={styles.SocialLink} onClick={()=> window.open("https://www.facebook.com/varun.saini.5473894/","_blank")}/>
        </p>
      </div>
    );
  }
}

export default Portfolio;
