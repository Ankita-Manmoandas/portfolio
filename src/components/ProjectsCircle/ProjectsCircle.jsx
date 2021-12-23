import react, {useState} from "react";
import "./ProjectsCircle.scss";

const ProjectsCircle = (props) => {
  const {defaultCircle, projectCircle, projectName}= props;

  const [showProject, setShowProject] = useState (false);

  return <div className="project-circles">
  
    <img src={defaultCircle} alt= "circle art" className="project-circles__img"
onMouseMove={()=> setShowProject(true)}
onClick={()=>setShowProject (false)}

    /> 

    {showProject && (
      <img src={projectCircle} alt="project" 
      className="project-circles__img"
   
      
      />
    )}

    <p> {projectName} </p>



  </div>
}

export default ProjectsCircle;