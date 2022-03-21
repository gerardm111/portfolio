import React from "react";
import {useRecoilValue, selector} from 'recoil';
import { langageState } from "./Header";
import "../assets/styles/experiences.scss";
import telecomEtude from "../assets/logo/telecom_etude.svg";
import telecomEtudeB from "../assets/logo/telecom_etude_black.svg";
import sicara from "../assets/logo/sicara.svg";

export default function Experiences () {
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
        <div id="EXP-main">
            <h1>J'ai travaillé avec:</h1>
            <div id="EXP-ent">
            <a href="https://telecom-etude.fr/"><img onMouseEnter={(e) =>{e.target.src=telecomEtude}} onMouseLeave={(e) =>{e.target.src=telecomEtudeB}} src={telecomEtudeB} /></a>
            </div>
        </div>
    )
    }
    if (displayLangage === "en"){
        return(
        <div id="EXP-main">
            <h1>I have worked with:</h1>
            <div id="EXP-ent">
                <a href="https://telecom-etude.fr/"><img onMouseEnter={(e) =>{e.target.src=telecomEtude}} onMouseLeave={(e) =>{e.target.src=telecomEtudeB}} src={telecomEtudeB} /></a>
            </div>
        </div>
        )
    }
}