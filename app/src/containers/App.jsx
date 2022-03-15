import React from 'react';
import Header from "../components/Header";
import "../assets/styles/main.scss"
import Welcome from '../components/Welcome';
import Projects from './Projects';

export default function App (){
 return(
    <div>
      <Header />
      <Welcome />
      <Projects />
    </div>
 )
}