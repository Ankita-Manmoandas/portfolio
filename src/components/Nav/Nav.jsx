import React, {useState} from "react";
import NavMenu from "../NavMenu/NavMenus";
import menu from "../../assests/images/menu-icon.png"
import "./Nav.scss"


const Nav = () => {

  const [showMenu, setShowMenu]= useState(false);


  const toggleNav = () => {
    setShowMenu(!showMenu)
  }

  return   <nav className="Nav">
  {/* <h2 className="Nav__logo">Ankita M</h2>
  <ul className="Nav__ul">
    <a href="home.html" className="Nav__home">Home</a>
    <a href="#section_tech" className="Nav_skill"> Skills</a>
    <a href="#section__projects" className="Nav__projects">Projects</a>
    <a href="#section_contact" className= "Nav__contact">Contact/CV</a>
  </ul> */}


  {/* <NavMenu  toggle = {toggleNav} */}
  {showMenu && <NavMenu toggle = {toggleNav}></NavMenu>}
 <img src={menu} alt="menu" onClick={toggleNav} />

</nav>
}

export default Nav;