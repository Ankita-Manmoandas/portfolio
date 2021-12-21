import Github from "../../assests/images/Desktop version/github.png";
import npm from "../../assests/images/Desktop version/cib_npm.png";
import html from "../../assests/images/Desktop version/html-five.png";
import java from "../../assests/images/Desktop version/java.png";
import js from "../../assests/images/Desktop version/js.png";
import node from "../../assests/images/Desktop version/la_node.png";
import react from "../../assests/images/Desktop version/react.png";
import css3 from "../../assests/images/Desktop version/css3.png";
import cypress from "../../assests/images/Desktop version/cypress.png";


import "./TechStack.scss";



const TechStack = () => {
  return <div className="teck-stack">
    <img src={Github} alt="programming language icon" className="teck-stack__icon"/>
    <img src={npm} alt="programming language icon" className="teck-stack__icon"/>
    <img src={html} alt="programming language icon" className="teck-stack__icon"/>
    <img src={java} alt="programming language icon" className="teck-stack__icon"/>
    <img src={js} alt="programming language icon" className="teck-stack__icon"/>
    <img src={node} alt="programming language icon" className="teck-stack__icon"/>
    <img src={react} alt="programming language icon" className="teck-stack__icon" />
    <img src={css3} alt="programming language icon" className="teck-stack__icon"/>
    <img src={cypress} alt="programming language icon" className="teck-stack__icon"/>
    
  </div>
}

export default TechStack; 
