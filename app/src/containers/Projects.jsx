import React from "react";
import ProjectItem from "../components/ProjectItem";
import projectContent from "../assets/contents/projects.json";
import "../assets/styles/projects.scss";
import {useRecoilValue, selector} from 'recoil';
import { langageState } from "../components/Header";

export default function Projects(){
    const langageStateGet = selector({
        key: 'langageStateGet',
        get: ({get}) => {
            const state = get(langageState);
            return state;
        },
    });
    const displayLangage = useRecoilValue(langageStateGet);

    if (displayLangage === "fr"){
        return(
            <div id="PR-main">
                <div id="PR-text">
                    <h2>Portfolio</h2>
                    <h4>Découvrez certains des projets sur lesquels j’ai travaillé</h4>
                </div>
            <div id="PR-choice">
                    <a>Tout voir</a>
                    <a>NLP</a>
                    <a>Images</a>
                    <a>Kaggle</a>
                    <a>Médical</a>
                    <a>Scientific paper</a>
                    <a>Web</a>
            </div>
                <div id="PR-items">
                    {projectContent.fr.map((p)=>(
                        <div key={p.title}>
                            <ProjectItem project={p} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    if (displayLangage === "en"){
        return(
            <div id="PR-main">
                <div id="PR-text">
                    <h2>Portfolio</h2>
                    <h4>Take a look at some of the projects I have been working on</h4>
                </div>
            <div id="PR-choice">
                    <a>Show all</a>
                    <a>NLP</a>
                    <a>Images</a>
                    <a>Kaggle</a>
                    <a>Medical</a>
                    <a>Scientific paper</a>
                    <a>Web</a>
            </div>
                <div id="PR-items">
                    {projectContent.en.map((p)=>(
                        <div key={p.title}>
                            <ProjectItem project={p} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}