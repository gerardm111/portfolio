import React from 'react';
import Header from "../components/Header";
import "../assets/styles/main.scss"
import Welcome from '../components/Welcome';
import Projects from './Projects';
import Formation from './Formation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Experiences from './Experiences';

export default function App (){
 return(
    <div>
      <Header />
      <Welcome />
      <span id="F-jump"></span>
      <Formation />
      <span id="PR-jump"></span>
      <Projects />
      <span id="EXP-jump"></span>
      <Experiences />
      <span id="C-jump"></span>
      <Contact />
      <Footer />
    </div>
 )
}