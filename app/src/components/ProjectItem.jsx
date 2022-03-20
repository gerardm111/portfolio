import React from "react";
import "../assets/styles/projectitem.scss";

function importAll(r){
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const dictChoices = {"nlp":"NLP", "img":"Images", "kaggle": "Kaggle", "med": "Medical", "paper": "Scientific paper", "web": "Web"};
export default function ProjectItem({project}){
    const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g)$/));
    const pdf_link = importAll(require.context('../assets/pdf', false, /\.(pdf)$/));
    const logos = importAll(require.context('../assets/logo', false, /\.(svg)$/));
    let liens = [];
    let liens_pdf = [];
    for (let i = 0; i<project.lien.length; i++){
        if (project.lien[i].match(/(\w*)\.pdf$/) === null){
            liens.push(project.lien[i]);
        }
        else{
            liens_pdf.push(pdf_link[project.lien[i]]);
        }
    }
    return(
        <div id="PRI-main">
            <link href='https://css.gg/file-document.css' rel='stylesheet'></link>
            <link href='https://css.gg/terminal.css' rel='stylesheet'></link>
            <div id="PRI-header">
                <img src={images[project.image]} alt="Couverture projet" />
                <div id="PRI-date_nb">
                    <h5>{project.date_debut} - {project.date_fin}</h5>
                    <h5>{project.nb_collaborateurs}</h5>
                </div>
            </div>
            <div id="PRI-info">
                <div id="PRI-info1">
                    <h2>{project.title}</h2>
                    <div id="PRI-infography">
                        <div id="PRI-tags">
                            {project.categories.map((p)=>(
                                <div key={p}>
                                    <a>{dictChoices[p]}</a>
                                </div>
                            ))}
                        </div>
                        <div id="PRI-techno">
                        {project.techno.map((t)=>(
                                <div key={t}>
                                    <img src={logos[t+".svg"]} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <h5>{project.description}</h5>
                </div>
                <div id="PRI-liens">
                    <h5>Pour en savoir plus: </h5>
                {liens.map((l)=>(
                        <div key={l}>
                            <a href={l}><i className="gg-terminal"></i></a>
                        </div>
                ))}
                {liens_pdf.map((l)=>(
                        <div key={l}>
                            <a href={l}><i className="gg-file-document"></i></a>
                        </div>
                ))}
                </div>
            </div>
        </div>
    )
}