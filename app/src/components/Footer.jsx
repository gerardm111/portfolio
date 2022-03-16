import React, {useState, useEffect} from 'react';
import "../assets/styles/footer.scss";

export default function Footer (){
    return(
        <div id='FO-main'>
            <div id="FO-me">
                <h4>Auteur: Mahaut Gerard</h4>
                <h4>Host: Github geradm111</h4>
            </div>
            <div id="legal">
                <h4>Conditions</h4>
            </div>
            <div id="FO-other">
                <h3>Crédits</h3>
                <h4>background svg</h4>
            </div>
        </div>
    )
}