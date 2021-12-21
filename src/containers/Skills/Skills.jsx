import Circles from "../../components/Circles/Circles"

import TechStack from "../../components/TeckStack/TechStack";
import "./Skills.scss";

const Skills = () => {

  return <div className="skills"> 
  
  <Circles className="skills__circles"/>
  <h3 className="skills__header"> Tech Stack </h3>
  <TechStack className="skills__icons" />

  
 </div>
}

export default Skills;