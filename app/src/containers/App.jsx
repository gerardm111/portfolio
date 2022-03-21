import React, {useEffect} from 'react';
import Header from "../components/Header";
import "../assets/styles/main.scss"
import Welcome from '../components/Welcome';
import Projects from './Projects';
import Formation from './Formation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Experiences from '../components/Experiences';
import Summary from '../components/Summary';

export default function App (){

  function reveal() {
    var reveals = document.querySelectorAll(".elem-show");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight -150 ) {
        reveals[i].classList.add("elem-show-anim");
        reveals[i].hidden = false
      }
    }
  }

  useEffect(() => {
    reveal()
  },[]);

  window.addEventListener("scroll", reveal);

 return(
    <div>
      <Header />
      <Welcome />
      <span id="F-jump" className="elem-show">
      <Formation />
      </span>
      <span id="PR-jump" className="elem-show">
      <Projects />
      </span>
      <span id="EXP-jump" className="elem-show">
      <Experiences />
      </span>
      <span id="C-jump" className="elem-show">
      <Contact />
      </span>
      <Footer />
    </div>
 )
}