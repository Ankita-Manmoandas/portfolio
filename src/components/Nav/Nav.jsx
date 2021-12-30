import React, {useState} from "react";
import NavMenu from "../NavMenu/NavMenus";
import menu from "../../assests/images/menu-icon.png";
import "./Nav.scss";


const Nav = () => {

  const [showMenu, setShowMenu]= useState(false);


  const toggleNav = () => {
    setShowMenu(!showMenu)
  }

  return   <nav className="nav">
  <h2 className="nav__logo">Ankita M</h2>
  <img src={menu} alt="menu" className ="nav__menu-image"
 onClick={toggleNav} />
 
  
  {showMenu && <NavMenu toggle = {toggleNav}></NavMenu>}


</nav>
}

export default Nav;