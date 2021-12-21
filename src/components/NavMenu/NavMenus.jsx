
import blackCross from "../../assests/images/black-cross.png";
import { Link } from "react-router-dom";
import "./NavMenu.scss"
const NavMenu = (props) => {
  const {toggle} = props;

  return <div className="nav-menu">
    <div className="nav-menu__content">
     <img src = {blackCross} alt="close-menu" className="nav-menu__cross" onClick = {toggle} />

     <Link to="/" className="nav-menu__item" onClick={toggle}>
      Home
    </Link>
    <Link to ="/skills" className=" nav-menu__item" onClick = {toggle}> 
    Skills 
    </Link>
    <Link to ="/projects" className=" nav-menu__item" onClick = {toggle}> 
    Projects
    </Link>
    <Link to ="/contact" className=" nav-menu__item" onClick = {toggle}> 
    Contact
    </Link>
  
  

    

    


    </div>


  </div>

}

export default NavMenu;