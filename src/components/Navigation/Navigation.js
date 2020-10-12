import React, { Component, useRef } from "react";
import styles from "./Navigation.module.css";

const CHANGE_OFFSET = 150;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.navigationRef = React.createRef();
    this.navItemRef = React.createRef();
    this.state = {
      navWidth: 0,
      attachNavBarToTop: false,
      navBottomBarOffset: -1,
    };
    let value;
  }

  componentDidMount = () => {
    this.value = this.navigationRef.current.getBoundingClientRect().top;
    this.setState({
      navWidth: this.navItemRef.current.clientWidth,
    });
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.scrollY >= this.value) {
      this.setState({ attachNavBarToTop: true });
    } else {
      this.setState({ attachNavBarToTop: false });
    }

    const backgroundRefFromProp = this.props.backgroundRef.current;
    const skillRefFromProp = this.props.skillsRef.current;
    const experienceRefFromProp = this.props.experienceRef.current;

    if (
      window.scrollY >= backgroundRefFromProp.offsetTop - CHANGE_OFFSET &&
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
    } else {
      this.setState({ navBottomBarOffset: -1 });
    }
  };

  render() {
    let navItemClass = styles.FullNavigationBottom;
    if (this.state.attachNavBarToTop) {
      navItemClass = styles.FullNavigationTop;
    }

    return (
      <div ref={this.navigationRef} className={navItemClass}>
        <div className={styles.Navigation}>
          <div className={styles.NavItems}>
            <div ref={this.navItemRef} onClick={this.props.backgroundClick}>
              Background
            </div>
            <div onClick={this.props.skillsClick}>Skills</div>
            <div onClick={this.props.experienceClick}>Experience</div>
            <div>Projects</div>
            <div>Contact</div>
            {/* <div>Resume</div> */}
          </div>
          <div
            style={{
              width: this.state.navWidth,
              left: this.state.navBottomBarOffset * this.state.navWidth,
            }}
            className={styles.NavigationBottomBar}
          ></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
