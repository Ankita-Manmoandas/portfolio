import Circles from "../../components/Circles/Circles"

import TechStack from "../../components/TeckStack/TechStack";
import "./Skills.scss";

const Skills = () => {

  return <div className="skills"> 
    <h2 className="skills__header"> Tech Stack </h2>
    <div className="skills__card">

    <div className="content">
  
  <Circles className="content__circles"/>

  <TechStack className="content__icons" />

  </div>
  </div>

  
 </div>
}

export default Skills;