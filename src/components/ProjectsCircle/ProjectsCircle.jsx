import react, {useState} from "react";
import "./ProjectsCircle.scss";
import code from "../../assests/images/code.png";

const ProjectsCircle = (props) => {
  const {defaultCircle, projectCircle, projectName, description, link, gitLink}= props;

  const [showProject, setShowProject] = useState (false);
  const [showDefault,setShowDefault]= useState(true);

  const toggle = () => {
    setShowProject(!showProject)
    setShowDefault(!showDefault)
  }

  return <div className="project-circles">
    {showDefault && 
  
    <img src={defaultCircle} alt= "circle art" className="project-circles__img"
onMouseMove= {toggle}

    /> }

    {showProject && (
      <img src={projectCircle} alt="project" 
      className="project-circles__img"
      onMouseLeave={toggle}
   
      
      />
    )}

    <p> {projectName} </p>
    {showProject && (
    <p className="project-circles__description">{description}</p> ) }
    <section className="project-circles__links">  
    <a href= {link} target="_blank">
    <button className="project-circles__button">
    Live site </button>
    </a>
    <a href = {gitLink} target="_blank">
    <img src= {code} alt = " programming icon"
    className="project-circles__icon"  />
    </a>
    </section>





  </div>
}

export default ProjectsCircle;