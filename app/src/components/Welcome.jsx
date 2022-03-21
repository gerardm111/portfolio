import React, {useEffect} from "react";
import fakeMe from "../assets/img/fakeMe.png";
import "../assets/styles/welcome.scss";
import {useRecoilValue, selector} from 'recoil';
import { langageState } from "./Header";
import dataScience from "../assets/logo/data_science.svg";
import ml from "../assets/logo/deep-learning.svg";

export default function Welcome (){
    const langageStateGet = selector({
        key: 'langageStateGet',
        get: ({get}) => {
            const state = get(langageState);
            return state;
        },
    });
    const displayLangage = useRecoilValue(langageStateGet);

    function disapear() {
        var reveals = document.querySelectorAll("#WL-main");
        for (var i = 0; i < reveals.length; i++) {
          var elementTop = reveals[i].getBoundingClientRect().top;
          if (elementTop < -700) {
            document.getElementById("HD-main").classList.add("HD-scrolled")
          }
          else{
            document.getElementById("HD-main").classList.remove("HD-scrolled")
          }
        }
      }

    useEffect(() => {
        disapear()
    },[]);

    window.addEventListener("scroll", disapear);

    if (displayLangage === "en"){
        return(
            <div id="WL-main">
                <div id="WL-wl">
                    <div id="WL-text">
                        <h1>Mahaut Gerard</h1>
                        <h3>Engineer Telecom Paris & Msc. Informatics Technische Universität München</h3>
                        <a href="#C-jump" style={{"textDecoration": "none"}}>Contact</a>
                    </div>
                    <div id="WL-img">
                        <img src={fakeMe} alt="My photo" />
                    </div>
                </div>
                <div id="WL-sum">
                    <div id="WL-ml">
                        <img src={ml} alt="machine learning icon"/>
                        <div id="WL-description">
                            <h1>Artificial Intelligence</h1>
                            <h3>Classification, Prediction, Deep Learning, Supervised and Unsupervised learning. NLP & Image tasks. Complete pipeline from dataset creation to machine learning models and analysis.</h3>
                        </div>
                    </div>
                    <div id="WL-ds">
                        <img src={dataScience} alt="data science icon" />
                        <div id="WL-description">
                            <h1>Data Science</h1>
                            <h3>Text, 3D & 2D Images, tables. Dataset creation and Databases management. Data analysis and preprocessing.</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (displayLangage === "fr"){
        return(
            <div id="WL-main">
                <div id="WL-wl">
                    <div id="WL-text">
                        <h1>Mahaut Gérard</h1>
                        <h3>Ingénieure Telecom Paris & Msc. Informatique Technische Universität München</h3>
                        <a href="#C-jump" style={{"textDecoration": "none"}}>Contact</a>
                    </div>
                    <div id="WL-img">
                        <img src={fakeMe} alt="My photo" />
                    </div>
                </div>
                <div id="WL-sum">
                    <div id="WL-ml">
                        <img src={ml} alt="machine learning icon"/>
                        <div id="WL-description">
                            <h1>Intelligence Artificielle</h1>
                            <h3>Classification, Prédiction, Deep Learning, Supervised et Unsupervised learning. Modèles pour NLP & Images. Processus complet depuis la création de la base de données, aux modèles de machine learning, jusqu'à leur analyse.</h3>
                        </div>
                    </div>
                    <div id="WL-ds">
                        <img src={dataScience} alt="data science icon" />
                        <div id="WL-description">
                            <h1>Data Science</h1>
                            <h3>Textes, Images 3D & 2D , tableaux. Creation et management de bases de données. Analyses de données et preprocessing.</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}