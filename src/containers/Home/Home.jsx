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

<div className="Home">
<Circles className="Home__circles" />
  <div className="Home__section">
  
      <h2 className="Home__header"> 
      Hi! 👋
        <br />
        My name is Ankita and I’m a 
        <br />
        Junior Full Stack Engineer.
      </h2>
      
      <p className="Home__CTA"> 
        Scroll down to view
      </p>
      <img src={arrow} className="Home__arrow" />
     
    </div>


   </div>
   <div className="containers">

 
    <Skills className="containers__section"/>
    <Projects  className="containers__section"/> 
    <About className="containers__section" /> 
    <Contact className="containers__section" />  

   </div>


  </>

   
};

export default Home;