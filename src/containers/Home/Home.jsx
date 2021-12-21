import React from "react";
import Circles from "../../components/Circles/Circles";
import Skills from "../Skills/Skills";
import "./Home.scss";

const Home = () => {

  return <>
<Circles />
<div className="Home">
  <div className="Home__section">
  
      <h2 className="Home__header"> 
      Hi!
        <br />
        My name is Ankita and I’m a 
        <br />
        Software Developer.
      </h2>
      <button className="Home__CTA"> 
        Scroll down to view
      </button>
    </div>
   </div>

    <Skills />

  </>

   
};

export default Home;