import react, {useState} from "react";

const ProjectsCircle = (props) => {
  const {defaultCircle, projectCircle}= props;

  const [showProject, setShowProject] = useState (false);


  return <div>
    <img src={defaultCircle} alt= "circle art" 

    onMouseEnter={() => setShowProject(true)}
    onMouseLeave={() => setShowProject(false)}
    /> 

    {showProject && (
      <img src={projectCircle} alt="project" />
    )}



  </div>
}

export default ProjectsCircle;