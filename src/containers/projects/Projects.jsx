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
      <h2 className="projects__header"> Projects</h2>

      <div className="projects__content">
  <ProjectsCircle 
  defaultCircle = {PurpleCircle} 
  projectCircle= {Calculator} projectName="Calculator" description = "The first JS challenge as part of the _nology training course in which I was tasked to produce a basic, fully functional calculator using vanilla JS."
  link="https://ankita-manmoandas.github.io/Calculator/"
  gitLink = "https://github.com/Ankita-Manmoandas/Calculator"
  />
  <ProjectsCircle  defaultCircle = {darkBlue} projectCircle={tictac} projectName="Noughts and Crosses"  
  description = " A space themed, two-player noughts and crosses game made using vanilla JS and functional programming.This game offers personalised feedback to the players."
  link = "https://ankita-manmoandas.github.io/tictactoegame/"
  gitLink = "https://github.com/Ankita-Manmoandas/tictactoegame"

 />
  <ProjectsCircle  defaultCircle = {PurpleCircle} projectCircle={punk} projectName="BrewDog"
  description= "A React App that uses the PUNK API to fetch and display data. A user can search by beer name or use the provided filters to change the beer display accordingly."
  link="https://ankita-manmoandas.github.io/punk-api/" 
  gitLink="https://github.com/Ankita-Manmoandas/punk-api"/>
  <ProjectsCircle  defaultCircle = {darkBlue} projectCircle={morse} projectName="Morse-code translator" description= "An English-to-Morse translator, which can translate words and sentences. This project was created within an internal 4 hour challenge at _nology and was made using test-driven development. " 
  link ="https://ankita-manmoandas.github.io/Morse-code-translator/"
  gitLink="https://github.com/Ankita-Manmoandas/Morse-code-translator"/>
  <br />
  </div>
  <h4 className="projects__instruction">Hover over each circle for a preview!</h4>


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