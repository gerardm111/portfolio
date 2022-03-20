import {React, useEffect} from "react";
import ProjectItem from "../components/ProjectItem";
import projectContent from "../assets/contents/projects.json";
import "../assets/styles/projects.scss";
import {useRecoilValue, selector, atom, useRecoilState} from 'recoil';
import { langageState } from "../components/Header";

export const portfolioState = atom({
    key: 'portfolioState',
    default: 'all',
});
const listChoices = ["all", "nlp", "img", "kaggle", "med", "paper", "web"];
export default function Projects(){
    let tempProjectList = [];
    const [portfolioChoice, setPortfolioChoice] = useRecoilState(portfolioState);
    useEffect(() => {
        for(let i=0; i < listChoices.length; i++){
            if (portfolioChoice === listChoices[i]){
                document.getElementById(listChoices[i]).style.backgroundColor = "rgba(8, 19, 63, 1)";
                document.getElementById(listChoices[i]).style.color = "rgb(235, 181, 100)";
            }
            else{
                document.getElementById(listChoices[i]).style.backgroundColor = "rgb(235, 181, 100)";
                document.getElementById(listChoices[i]).style.color = "rgba(8, 19, 63, 1)";
            }
        };
    },[portfolioChoice]);

    const langageStateGet = selector({
        key: 'langageStateGet',
        get: ({get}) => {
            const state = get(langageState);
            return state;
        },
    });
    const displayLangage = useRecoilValue(langageStateGet);
    if (displayLangage === "fr"){
        tempProjectList = [];
        if (portfolioChoice === "all"){
            tempProjectList = projectContent.fr
        }
        else{
        for (let i = 0; i < projectContent.fr.length; i++){
            if (projectContent.fr[i].categories.includes(portfolioChoice)){
                tempProjectList.push(projectContent.fr[i]);
            }
        }
        }
        return(
            <div id="PR-main">
                <div id="PR-text">
                    <h1>Portfolio</h1>
                    <h4>Découvrez certains des projets sur lesquels j’ai travaillé</h4>
                </div>
            <div id="PR-choice">
                    <a onClick={() => {setPortfolioChoice("all")}} id="all">Tout voir</a>
                    <a onClick={() => {setPortfolioChoice("nlp")}} id="nlp">NLP</a>
                    <a onClick={() => {setPortfolioChoice("img")}} id="img">Images</a>
                    <a onClick={() => {setPortfolioChoice("kaggle")}} id="kaggle">Kaggle</a>
                    <a onClick={() => {setPortfolioChoice("med")}} id="med">Médical</a>
                    <a onClick={() => {setPortfolioChoice("paper")}} id="paper">Scientific paper</a>
                    <a onClick={() => {setPortfolioChoice("web")}} id = "web">Web</a>
            </div>
                <div id="PR-items">
                    {tempProjectList.map((p)=>(
                        <div key={p.title}>
                            <ProjectItem project={p} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    if (displayLangage === "en"){
        tempProjectList = [];
        if (portfolioChoice === "all"){
            tempProjectList = projectContent.en
        }
        else{
        for (let i = 0; i < projectContent.en.length; i++){
            if (projectContent.en[i].categories.includes(portfolioChoice)){
                tempProjectList.push(projectContent.en[i]);
            }
        }
        }
        return(
            <div id="PR-main">
                <div id="PR-text">
                    <h1>Portfolio</h1>
                    <h4>Take a look at some of the projects I have been working on</h4>
                </div>
            <div id="PR-choice">
                    <a onClick={() => {setPortfolioChoice("all")}} id="all">Show all</a>
                    <a onClick={() => {setPortfolioChoice("nlp")}} id="nlp">NLP</a>
                    <a onClick={() => {setPortfolioChoice("img")}} id="img">Images</a>
                    <a onClick={() => {setPortfolioChoice("kaggle")}} id="kaggle">Kaggle</a>
                    <a onClick={() => {setPortfolioChoice("med")}} id="med">Medical</a>
                    <a onClick={() => {setPortfolioChoice("paper")}} id="paper">Scientific paper</a>
                    <a onClick={() => {setPortfolioChoice("web")}} id = "web">Web</a>
            </div>
                <div id="PR-items">
                    {tempProjectList.map((p)=>(
                        <div key={p.title}>
                            <ProjectItem project={p} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}