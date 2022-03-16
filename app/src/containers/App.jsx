import React from 'react';
import Header from "../components/Header";
import "../assets/styles/main.scss"
import Welcome from '../components/Welcome';
import Projects from './Projects';
import Formation from './Formation';

export default function App (){
 return(
    <div>
      <Header />
      <Welcome />
      <Formation />
      <Projects />
    </div>
 )
}