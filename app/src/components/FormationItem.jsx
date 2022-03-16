import React from "react";
import "../assets/styles/formationitem.scss";

function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default function FormationItem({formation}){
    const logos = importAll(require.context('../assets/logo', false, /\.(png|jpe?g|svg)$/));
    return(
        <div id="FI-main">
            <div id="FI-left">
                <img src={logos[formation.logo]} alt="logo Telecom Paris"/>
            </div>
            <div id="FI-right">
                <h2>{formation.diplôme}</h2>
                <h4>{formation.description}</h4>
            </div>
        </div>
    )
}