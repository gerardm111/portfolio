import React from "react";
import {useRecoilValue, selector} from 'recoil';
import { langageState } from "../components/Header";
import "../assets/styles/experiences.scss";
import experienceContent from "../assets/contents/experiences.json";
import ExperienceItem from "../components/ExperienceItem";

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
            <h1>Experience</h1>
            <div id="F-items">
                {experienceContent.fr.map((p)=>(
                    <div key={p.title}>
                        <ExperienceItem experience={p} />
                    </div>
                ))}
            </div>
        </div>
    )
    }
    if (displayLangage === "en"){
        return(
        <div id="EXP-main">
            <h1>Experience</h1>
            <div id="F-items">
                {experienceContent.en.map((p)=>(
                    <div key={p.title}>
                        <ExperienceItem experience={p} />
                    </div>
                ))}
            </div>
        </div>
        )
    }
}