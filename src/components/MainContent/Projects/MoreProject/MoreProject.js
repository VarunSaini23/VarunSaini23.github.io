import React from "react";
import styles from "./MoreProject.module.css";
import { ReactComponent as GithubSVG } from "../../../../assets/svgs/projectsSVG/github.svg";
import { ReactComponent as LinkSVG } from "../../../../assets/svgs/projectsSVG/link.svg";

const moreProject = (props) => {
  const allTechStacks = props.techStacks.map((value, index) => {
    return <div id={index}>{value}</div>;
  });

  return (
    <div className={styles.MoreProject}>
      <div className={styles.TitleIcons}>
        <h3>Title</h3>
        <div className={styles.Icons}>
          <GithubSVG className={styles.SVG} />
          <LinkSVG className={styles.SVG} />
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className={styles.TechStack}>{allTechStacks}</div>
    </div>
  );
};

export default moreProject;
