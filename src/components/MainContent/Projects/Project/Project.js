import React from "react";
import styles from "./Project.module.css";
import { ReactComponent as GithubSVG } from "../../../../assets/svgs/projectsSVG/github.svg";
import { ReactComponent as LinkSVG } from "../../../../assets/svgs/projectsSVG/link.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const project = (props) => {
  const allTechStacks = props.techStacks.map((value, index) => {
    return <div id={index}>{value}</div>;
  });

  const allCarousalImages = props.images.map((value, index) => {
    return <img src={value} id={index} />;
  });

  return (
    // <div className={styles.Project}>
    //   <div className={styles.Left}>
    //     {/* <img src={props.image} alt="Project" /> */}
    //     <img src={props.image} alt="Project" />
    //   </div>

    //   <div className={styles.Right}>
    //     <div className={styles.Icons}>
    //       <GithubSVG className={styles.SVG} />
    //       <LinkSVG className={styles.SVG} />
    //     </div>
    //     <div className={styles.RightContent}>
    //       <h2>{props.title}</h2>
    //       <p>{props.content}</p>
    //     </div>

    //     <div className={styles.TechStack}>{allTechStacks}</div>
    //   </div>
    // </div>

    <div className={styles.Project2}>
      <Carousel className={styles.Carousal} renderThumbs={() => null}>
        {allCarousalImages}
      </Carousel>
    </div>
  );
};

export default project;
