import React, { Component } from "react";
import Heading from "../../UI/Heading/Heading";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import varsmovies1 from "../../../assets/images/varsmovies1.jpg";
import varsmovies2 from "../../../assets/images/varsmovies2.jpg";
import varsmovies3 from "../../../assets/images/varsmovies3.jpg";
import varsmovies4 from "../../../assets/images/varsmovies4.jpg";

import onealarm1 from "../../../assets/images/onealarm1.jpg";
import onealarm2 from "../../../assets/images/onealarm2.jpg";
import mediasec from "../../../assets/images/mediasec1.png";
import MoreProject from "./MoreProject/MoreProject";
import Fade from "react-reveal";

class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects} ref={this.props.projectsRef}>
        <Fade bottom>
          <Heading>4. Featured Projects</Heading>
          <div className={styles.ProjectContainer}>
            <Project
              images={[varsmovies1, varsmovies2, varsmovies3, varsmovies4]}
              title="Varsmovies.com"
              text={[
                "A Website which displays the latest movies and TV series info, provides search and personal collection functionality, recommendations, and much more.",
                "It's backend is developed using Django framework and frontend using basic HTML/CSS/JS/Bootstrap ",
              ]}
              techStacks={["Django", "Bootstrap", "HTML/CSS"]}
              gitLink="https://github.com/VarunSaini23/VarsMovies-Django"
              liveLink="http://varsmovies.herokuapp.com/"
            />
            <Project
              images={[onealarm1, onealarm2]}
              title="One Alarm"
              text={[
                "An Android app in which you can categorize alarms in Groups and Turn ON / OFF the whole group. ",
                "Can also be used as your Primary Alarm clock",
                "The app is developed using Java in Android Studio",
              ]}
              techStacks={["Android", "Java", "XML"]}
              gitLink="https://github.com/GDGVIT/Group-Alarm-App"
              liveLink="https://play.google.com/store/apps/details?id=com.VarunSaandroid.onealarm"
            />
            {/* <Project
              images={[mediasec, onealarm2, varsmovies1]}
              title="MediaSec"
              text={[
                "A Website which displays the latest movies and TV series info, provides search and personal collection functionality, recommendations, and much more.",
                "It's backend is developed using Django framework and frontend using basic HTML/CSS/JS/Bootstrap ",
              ]}
              techStacks={[
                "Blockchain",
                "Ethereum",
                "Solidity",
                "Smart Contract",
              ]}
            /> */}
          </div>
          {/* <Project /> */}
          <h2>More Projects</h2>
          <div className={styles.MoreProjectContainer}>
            <MoreProject title="VS Wallpapers HD"
              text="A Wallpaper app made with Flutter consuming Pixabay API. It uses BLOC pattern for state management. Using sqflite, it stores wallpapers providing offline capabilities. Search for any wallpaper, get popular wallpapers, recommended wallpaper."
              techStacks={["Flutter", "IOS", "Android", "Hyrid AppDev"]}
              gitLink="https://github.com/VarunSaini23/VS-Wallpaper-App-Flutter"
              liveLink="https://play.google.com/store/apps/details?id=com.photo.wallpapers"
            />

             <MoreProject title="Medisys"
              text="A Personal Medical Assistant App which uses OCR technology to detect your Medical reports and provide you with the best and affordable combinations of Medicines after examining your report. Machine learning algorithms are used to decide the medicines."
              techStacks={["Java", "Android", "Google Vision API", "Firebase"]}
              gitLink="https://github.com/VarunSaini23/Medisys"
            />
            
            <MoreProject title="AL Weather"
              text="A Simple App which helps you find weather of your current location and next 5 days . It is made in flutter using BLOC pattern for state management."
              techStacks={["Flutter", "Android", "IOS"]}
              gitLink="https://github.com/VarunSaini23/Flutter-Weather-App"
              liveLink="https://play.google.com/store/apps/details?id=com.weathther"
            />
            
            <MoreProject title="Quadro"
              text="An App which helps developers to connect with each other. For instance, A developer looking for a designer for a project can come and find a fellow designer on our app and later collaborate."
              techStacks={["Java", "Android", "XML"]}
              gitLink="https://github.com/nikhils4/Quadro"
            />
            
            <MoreProject title="VitWifi-OneTapConnect"
              text="Developed to help fellow students to connect with VIT Wifi easily. Use multiiple accounts and connect with any registered account"
              techStacks={["Java", "Android", "XML"]}
              gitLink="https://github.com/VarunSaini23/VitWifi-OneTapConnect"
              liveLink="https://play.google.com/store/apps/details?id=com.varunsroid.vitwifi"
            />
          </div>
        </Fade>
      </div>
    );
  }
}

export default Projects;
