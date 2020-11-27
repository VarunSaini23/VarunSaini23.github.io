import React from "react";
import styles from "./MoreProject.module.css";
import { ReactComponent as GithubSVG } from "../../../../assets/svgs/projectsSVG/github.svg";
import { ReactComponent as LinkSVG } from "../../../../assets/svgs/projectsSVG/link.svg";

const moreProject = (props) => {
  const allTechStacks = props.techStacks.map((value, index) => {
    return <div key={index} id={index}>{value}</div>;
  });

  return (
    <div className={styles.MoreProject}>
      <div className={styles.TitleIcons}>
        <h3>{props.title}</h3>
        <div className={styles.Icons}>
          <GithubSVG className={styles.SVG} onClick={()=>window.open(props.gitLink,"_blank")}/>
          {props.liveLink ?
            <LinkSVG className={styles.SVG} onClick={() => window.open(props.liveLink, "_blank")} />
            : null}
        </div>
      </div>

      <p>
        {props.text}
      </p>

      <div className={styles.TechStack}>{allTechStacks}</div>
    </div>
  );
};

export default moreProject;
