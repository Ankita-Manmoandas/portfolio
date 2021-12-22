import React from "react";
import Circles from "../../components/Circles/Circles";
import Skills from "../Skills/Skills";
import "./Home.scss";
import arrow from "../../assests/images/Arrow 1.png"
import Projects from "../projects/Projects";
import About from "../About/About";
import Contact from "../contact/Contact";

const Home = () => {

  return <>
<Circles className="circles-home" />
<div className="Home">
  <div className="Home__section">
  
      <h2 className="Home__header"> 
      Hi!
        <br />
        My name is Ankita and I’m a 
        <br />
        Junior Full Stack Engineer
      </h2>
      <p className="Home__CTA"> 
        Scroll down to view
      </p>
      <img src={arrow} />
    </div>


   </div>
   <Skills />

   <Projects /> 

   <About /> 
   <Contact /> 


  </>

   
};

export default Home;