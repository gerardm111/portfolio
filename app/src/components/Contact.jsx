import React from "react";
import { langageState } from "../components/Header";
import {useRecoilValue, selector} from 'recoil';
import "../assets/styles/contact.scss";
import enCv from "../assets/pdf/MahautGerard_CV - Pro - EN.pdf";
import frCv from "../assets/pdf/MahautGerard_CV - Pro - Francais.pdf";

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
                <link href='https://css.gg/mail.css' rel='stylesheet'></link>
                <link href='https://css.gg/mail-open.css' rel='stylesheet'></link>
                <link href='https://css.gg/software-download.css' rel='stylesheet'></link>
                <link href='https://css.gg/file-document.css' rel='stylesheet'></link>
                <div id="C-contact">
                    <div id="C-left">
                        <a href="mailto:mahaut.gerard@telecom-paris.fr"><i className="gg-mail" onMouseEnter={(e) =>{e.target.className="gg-mail-open"}} onMouseLeave={(e) =>{e.target.className="gg-mail"}}></i></a>
                    </div>
                    <div id="C-right">
                        <h1>Contact</h1>
                        <a>mahaut.gerard@telecom-paris.fr</a>
                    </div>
                </div>
                <div id="C-CV">
                    <div id="C-left">
                        <a href={frCv}><i className="gg-file-document" onMouseEnter={(e) =>{e.target.className="gg-software-download"}} onMouseLeave={(e) =>{e.target.className="gg-file-document"}}></i></a>
                    </div>
                    <div id="C-right">
                        <h1>Mon cv</h1>
                    </div>
                </div>
            </div>
    )
        }
    if (displayLangage === "en"){
        return(
            <div id="C-main">
                <link href='https://css.gg/mail.css' rel='stylesheet'></link>
                <link href='https://css.gg/mail-open.css' rel='stylesheet'></link>
                <link href='https://css.gg/software-download.css' rel='stylesheet'></link>
                <link href='https://css.gg/file-document.css' rel='stylesheet'></link>
                <div id="C-contact">
                    <div id="C-left">
                        <a href="mailto:mahaut.gerard@telecom-paris.fr"><i className="gg-mail" onMouseEnter={(e) =>{e.target.className="gg-mail-open"}} onMouseLeave={(e) =>{e.target.className="gg-mail"}}></i></a>
                    </div>
                    <div id="C-right">
                        <h1>Contact</h1>
                        <a>mahaut.gerard@telecom-paris.fr</a>
                    </div>
                </div>
                <div id="C-CV">
                    <div id="C-left">
                        <a href={enCv}><i className="gg-file-document" onMouseEnter={(e) =>{e.target.className="gg-software-download"}} onMouseLeave={(e) =>{e.target.className="gg-file-document"}}></i></a>
                    </div>
                    <div id="C-right">
                        <h1>My resume</h1>
                    </div>
                </div>
            </div>
    )
        }
}