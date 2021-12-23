import Circles from "../../components/Circles/Circles"

import TechStack from "../../components/TeckStack/TechStack";
import "./Skills.scss";

const Skills = () => {

  return <div className="skills"> 
    <h2 className="skills__header"> Tech Stack </h2>
  
  <Circles className="skills__circles"/>

  <TechStack className="skills__icons" />

  
 </div>
}

export default Skills;