import react from "react";
import "./About.scss";
import DisplayPicture from "../../components/DisplayPicture/DisplayPicture";

const About = () => {
  return <div className="about">
    <h3 className="about__header">About me</h3>
    <DisplayPicture />
    <div className="about__content">
    <p> I'm a Biologist working towards
transitioning into a long-term career in tech.🪴
<br /> 
<br /> 

I fell in love with programming after I completed a
self-directed 300-hour Web development course
by FreeCodeCamp and Bright
Network’s Python intro course. 🤩
<br />
<br />
Following this, I
was accepted into the _nology
Technology Consultancy Programme. 🏢 </p>
</div>
    
  </div>
}

export default About