// App.jsx
import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenus";
import Skills from "./containers/Skills/Skills"
import Projects from "./containers/projects/Projects"
import Contact from "./containers/contact/Contact";
import Home from "./containers/Home/Home"; 
import About from "./containers/About/About"

const App = () => {
  return (
     <Router>
        <div className="app">
     <Nav />

     <Routes>
     <Route path ="/portfolio" element={<Home /> }/>
     <Route path = "/skills" element={<Skills />} />
     <Route path = "/projects" element= {<Projects />} />
     <Route path = "/about" element = {<About />} />
     <Route path = "/contact" element = {<Contact />} />
 

     </Routes>


    </div>
</Router> 
  );
};

export default App;