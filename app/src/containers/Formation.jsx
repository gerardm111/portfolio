import React from "react";
import FormationItem from "../components/FormationItem";
import { langageState } from "../components/Header";
import {useRecoilValue, selector} from 'recoil';
import "../assets/styles/formation.scss";
import FormationContent from "../assets/contents/formation.json";

export default function Formation () {
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
        <div id="F-main">
            <div id="F-text">
                <h1>Formation</h1>
                <h4>Découvrez mes diplômes et mon parcours académique</h4>
            </div>
            <div id="F-items">
                {FormationContent.fr.map((p)=>(
                    <div key={p.ecole}>
                        <FormationItem formation={p} />
                    </div>
                ))}
            </div>
        </div>
    )
    }
    if (displayLangage === "en"){
        return(
            <div id="F-main">
                <div id="F-text">
                    <h1>Education</h1>
                    <h4>Take a look at my academic curriculum</h4>
                </div>
                <div id="F-items">
                    {FormationContent.en.map((p)=>(
                        <div key={p.ecole}>
                            <FormationItem formation={p} />
                        </div>
                    ))}
                </div>
            </div>
        )
        }
}