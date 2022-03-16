import React from "react";
import { langageState } from "../components/Header";
import {useRecoilValue, selector} from 'recoil';
import "../assets/styles/contact.scss"

export default function Contact(){    const langageStateGet = selector({
    key: 'langageStateGet',
    get: ({get}) => {
        const state = get(langageState);
        return state;
    },
});
    const displayLangage = useRecoilValue(langageStateGet);
    if (displayLangage === "fr"){
        return(
            <div id="C-main">
                <h1>Contact</h1>
                <a href="mailto:mahaut.gerard@telecom-paris.fr" style={{"textDecoration": "none"}}>mahaut.gerard@telecom-paris.fr</a>
            </div>
    )
        }
    if (displayLangage === "en"){
        return(
            <div id="C-main">
                <h1>Contact</h1>
                <a href="mailto:mahaut.gerard@telecom-paris.fr" style={{"textDecoration": "none"}}>mahaut.gerard@telecom-paris.fr</a>
            </div>
    )
        }
}