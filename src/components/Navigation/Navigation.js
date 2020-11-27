import React, { Component, useRef } from "react";
import { Slide } from "react-toastify";
import styles from "./Navigation.module.css";

const CHANGE_OFFSET = 150;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.navigationRef = React.createRef();
    this.navBackgroundRef = React.createRef();
    this.navSkillsRef = React.createRef();
    this.navExperienceRef = React.createRef();
    this.navProjectsRef = React.createRef();
    this.navContactRef = React.createRef();

    this.state = {
      navBackgroundWidth: 0,
      navSkillsWidth: 0,
      navExperienceWidth: 0,
      navProjectsWidth: 0,
      navContactWidth: 0,
      attachNavBarToTop: false,
      navBottomBarOffset: -1,
    };
  }

  componentDidMount = () => {
    this.value = this.navigationRef.current.getBoundingClientRect().top;
    console.log("componnetdidmount", this.value);
    this.setState({
      navBackgroundWidth: this.navBackgroundRef.current.clientWidth,
      navSkillsWidth: this.navSkillsRef.current.clientWidth,
      navExperienceWidth: this.navExperienceRef.current.clientWidth,
      navProjectsWidth: this.navProjectsRef.current.clientWidth,
      navContactWidth: this.navContactRef.current.clientWidth,
    });
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    console.log(this.value);
    if (window.scrollY >= this.value) {
      this.setState({ attachNavBarToTop: true });
    } else {
      this.setState({ attachNavBarToTop: false });
    }

    const backgroundRefFromProp = this.props.backgroundRef.current;
    const skillRefFromProp = this.props.skillsRef.current;
    const experienceRefFromProp = this.props.experienceRef.current;
    const projectRefFromProp = this.props.projectsRef.current;
    const contactRefFromProp = this.props.contactRef.current;

    if (
      window.scrollY >= backgroundRefFromProp.offsetTop - 2 * CHANGE_OFFSET &&
      window.scrollY <=
        backgroundRefFromProp.offsetTop +
          backgroundRefFromProp.clientHeight -
          CHANGE_OFFSET
    ) {
      this.setState({ navBottomBarOffset: 0 });
    } else if (
      window.scrollY >= skillRefFromProp.offsetTop - CHANGE_OFFSET &&
      window.scrollY <=
        skillRefFromProp.offsetTop +
          skillRefFromProp.clientHeight -
          CHANGE_OFFSET
    ) {
      this.setState({ navBottomBarOffset: 1 });
    } else if (
      window.scrollY >= experienceRefFromProp.offsetTop - CHANGE_OFFSET &&
      window.scrollY <=
        experienceRefFromProp.clientHeight +
          experienceRefFromProp.offsetTop -
          CHANGE_OFFSET
    ) {
      this.setState({ navBottomBarOffset: 2 });
    } else if (
      window.scrollY >= projectRefFromProp.offsetTop - CHANGE_OFFSET &&
      window.scrollY <=
        projectRefFromProp.clientHeight +
          projectRefFromProp.offsetTop -
          CHANGE_OFFSET
    ) {
      this.setState({ navBottomBarOffset: 3 });
    } else if (
      window.scrollY >= contactRefFromProp.offsetTop - CHANGE_OFFSET &&
      window.scrollY <=
        contactRefFromProp.clientHeight +
          contactRefFromProp.offsetTop -
          CHANGE_OFFSET
    ) {
      this.setState({ navBottomBarOffset: 4 });
    } else {
      this.setState({ navBottomBarOffset: -1 });
    }
  };

  render() {
    let navItemClass = styles.FullNavigationBottom;
    if (this.state.attachNavBarToTop) {
      navItemClass = styles.FullNavigationTop;
    }

    let navigationWidthFromState = 0;
    switch (this.state.navBottomBarOffset) {
      case 0:
        navigationWidthFromState = this.state.navExperienceWidth;
        break;
      case 1:
        navigationWidthFromState = this.state.navSkillsWidth;
        break;
      case 2:
        navigationWidthFromState = this.state.navExperienceWidth;
        break;
      case 3:
        navigationWidthFromState = this.state.navProjectsWidth;
        break;
      case 4:
        navigationWidthFromState = this.state.navContactWidth;
        break;
    }

    let navigationLeftFromState = 0;
    switch (this.state.navBottomBarOffset) {
      case 1:
        navigationLeftFromState = this.state.navBackgroundWidth;
        break;
      case 2:
        navigationLeftFromState =
          this.state.navBackgroundWidth + this.state.navSkillsWidth;
        break;
      case 3:
        navigationLeftFromState =
          this.state.navBackgroundWidth +
          this.state.navSkillsWidth +
          this.state.navExperienceWidth;
        break;
      case 4:
        navigationLeftFromState =
          this.state.navBackgroundWidth +
          this.state.navSkillsWidth +
          this.state.navExperienceWidth +
          this.state.navProjectsWidth;
        break;
    }

    return (
      <div ref={this.navigationRef} className={navItemClass}>
        {/* <div className={styles.Navigation}> */}
        <div className={styles.NavItems}>
          <div ref={this.navBackgroundRef} onClick={this.props.backgroundClick}>
            Background
          </div>
          <div ref={this.navSkillsRef} onClick={this.props.skillsClick}>
            Skills
          </div>
          <div ref={this.navExperienceRef} onClick={this.props.experienceClick}>
            Experience
          </div>
          <div ref={this.navProjectsRef} onClick={this.props.projectsClick}>
            Projects
          </div>
          <div ref={this.navContactRef} onClick={this.props.contactClick}>
            Contact
          </div>
          {/* <div>Resume</div> */}
        </div>
        <div
          style={{
            width: navigationWidthFromState,
            left: navigationLeftFromState,
          }}
          className={styles.NavigationBottomBar}
        ></div>
      </div>
    );
  }
}

export default Navigation;
