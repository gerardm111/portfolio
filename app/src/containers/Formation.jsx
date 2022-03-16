import React from "react";
import FormationItem from "../components/FormationItem";
import { langageState } from "../components/Header";
import {useRecoilValue, selector} from 'recoil';
import "../assets/styles/formation.scss";
import FormationContent from "../assets/contents/formation.json";

export default function Formation () {
    return(
        <div id="F-main">
            <div id="F-text">
                <h2>Formation</h2>
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