import React from "react";
import "../assets/styles/experienceitem.scss";

export default function ExperienceItem({experience}){
    return(
        <div id="EXPI-main">
            <h2>{experience.title}</h2>
            <h4 id="EXPI-dates">{experience.date_debut} - {experience.date_fin}</h4>
            <h4>{experience.description}</h4>
        </div>
    )
}