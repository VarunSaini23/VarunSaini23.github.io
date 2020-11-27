import React from 'react'
import styles from "./ExperienceText.module.css"

const experienceText = (props) => {

    const textPoints = props.experienceInfo.textArr.map((text, idx) => {
        return <li key={idx} id={idx}>{text}</li>
    })

    return (
        <div className={styles.ExperienceText}>
            <div className={styles.Heading}>{props.experienceInfo.heading}</div>
            <div className={styles.Duration}>{props.experienceInfo.duration}</div>
            <div className={styles.Location}>{props.experienceInfo.location}</div>
            <ol className={styles.Points}>
                {textPoints}
            </ol>

        </div>
    );
}

export default experienceText;