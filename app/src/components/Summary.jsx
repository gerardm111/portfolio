import React from "react";
import {useRecoilValue, selector} from 'recoil';
import { langageState } from "./Header";
import "../assets/styles/summary.scss";

export default function Summary () {
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
        <div id="SUM-main">
            <h1>Machine Learning</h1>
            <h1>Data Science</h1>
        </div>
    )
    }
    if (displayLangage === "en"){
        return(
        <div id="SUM-main">
            <h1>Machine Learning</h1>
            <h1>Data Science</h1>
        </div>
        )
    }
}