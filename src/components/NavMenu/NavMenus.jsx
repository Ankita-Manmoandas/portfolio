
import blackCross from "../../assests/images/black-cross.png";
import { Link } from "react-router-dom";
const NavMenu = (props) => {
  const {toggle} = props;

  return <div className="NavMenu">
    <div className="NavMenu__content">
     <img src = {blackCross} alt="close-menu" className="NavMenu__content__cross" onClick = {toggle} />

     <Link to="/" className="nav-menu__item" onClick={toggle}>
      Home
    </Link>
    <Link to ="/Skills" className=" nav-menu__skills" onClick = {toggle}> 
    Skills 
    </Link>
    <Link to ="/Skills" className=" nav-menu__skills" onClick = {toggle}> 
    Projects
    </Link>
    <Link to ="/Skills" className=" nav-menu__skills" onClick = {toggle}> 
    Contact
    </Link>
  
  

    

    


    </div>


  </div>

}

export default NavMenu;