import react, {useState} from "react";
import "./Projects.scss"
import ProjectsCircle from "../../components/ProjectsCircle/ProjectsCircle";
import PurpleCircle from "../../assests/images/Ellipse 4.png";
import darkBlue from"../../assests/images/darkblue.png"
import Calculator from "../../assests/images/Calculator.png";
import tictac from "../../assests/images/tictac.png";
import punk from "../../assests/images/punk.png";
import morse from "../../assests/images/morse.png";

const Projects = () => {


  return <div className="projects">
  <h3> Projects</h3>
  <ProjectsCircle 
  defaultCircle = {PurpleCircle} 
  projectCircle= {Calculator} projectName="Calculator" />
  <ProjectsCircle  defaultCircle = {darkBlue} projectCircle={tictac} projectName="Noughts and Crosses"  />
  <ProjectsCircle  defaultCircle = {PurpleCircle} projectCircle={punk} projectName="Punk API" />
  <ProjectsCircle  defaultCircle = {darkBlue} projectCircle={morse} projectName="Morse-code translator"  />

  <p className="projects_instruction">Hover over each circle for a preview!</p>


  </div>
}

export default Projects;



// const [showProject, setShowProject] = useState(false);
// const [showEllipse, setShowEllipse]= useState (true);

// const toggleImg = () => {
//   setShowEllipse(!showEllipse)
// }

// return <div>
//   <h3> Projects</h3>
//   {showEllipse && 
//   <img src={purpleEclipse} alt= "circle art "  
//   onMouseEnter={() => setShowProject(true) } 
//   onMouseLeave= {() => setShowProject (false) }/>}
//    {showProject && 
//       <img src={calculator} alt= "circle art"/>
     
  
// }
// </div>