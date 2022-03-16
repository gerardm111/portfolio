import React from "react";
import "../assets/styles/projectitem.scss";

function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default function ProjectItem({project}){
    const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g)$/));
    return(
        <div id="PRI-main">
            <div id="PRI-header">
                <img src={images[project.image]} alt="Couverture projet" />
                <div id="PRI-date_nb">
                    <h5>{project.date_debut} - {project.date_fin}</h5>
                    <h5>{project.nb_collaborateurs}</h5>
                </div>
            </div>
            <div id="PRI-info">
                <h2>{project.title}</h2>
                <div id="PRI-tags">
                    {project.categories.map((p)=>(
                        <div key={p}>
                            <a>{p}</a>
                        </div>
                    ))}
                </div>
                <h5>{project.description}</h5>
                <a href={project.lien}>Kaggle</a>
            </div>
        </div>
    )
}