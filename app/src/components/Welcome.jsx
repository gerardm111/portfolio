import React from "react";
import fakeMe from "../assets/img/fakeMe.png";
import "../assets/styles/welcome.scss";
import {useRecoilValue, selector} from 'recoil';
import { langageState } from "./Header";

export default function Welcome (){
    const langageStateGet = selector({
        key: 'langageStateGet',
        get: ({get}) => {
            const state = get(langageState);
            return state;
        },
    });
    const displayLangage = useRecoilValue(langageStateGet);

    if (displayLangage === "en"){
        return(
            <div id="WL-main">
                <div id="WL-text">
                    <h1>Mahaut Gerard</h1>
                    <h3>Engineer Telecom Paris & Msc. Informatics Technische Universität München</h3>
                    <h3>Artificial intelligence and data science</h3>
                    <a>Contact</a>
                </div>
                <div id="WL-img">
                    <img src={fakeMe} alt="My photo" />
                </div>
            </div>
        )
    }
    if (displayLangage === "fr"){
        return(
            <div id="WL-main">
                <div id="WL-text">
                    <h1>Mahaut Gérard</h1>
                    <h3>Ingénieure Télécom Paris & Msc. Informatique Technische Universität München</h3>
                    <h3>Intelligence artificielle et data science</h3>
                    <a>Contact</a>
                </div>
                <div id="WL-img">
                    <img src={fakeMe} alt="Ma photo" />
                </div>
            </div>
        )
    }
}