import react, {useState} from "react";
import ProjectsCircle from "../../components/ProjectsCircle/ProjectsCircle";
import PurpleCircle from "../../assests/images/Ellipse 4.png";
import Calculator from "../../assests/images/Calculator.png";

const Projects = () => {
  return <div>
  <ProjectsCircle 
  defaultCircle = {PurpleCircle} 
  projectCircle= {Calculator}/>

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