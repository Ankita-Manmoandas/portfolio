// App.jsx
import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenus";
import Skills from "./containers/Skills/Skills"
import Projects from "./containers/projects/Projects"
import Contact from "./containers/contact/Contact"

const App = () => {
  return (
    <div className="app">
      <Nav />
     <Router>
     <Routes>
     <Route path = "/" element={<Nav /> }/>
     <Route path = "/skills" element={<Skills />} />
     <Route path = "/projects" element= {<Projects />} />
     <Route path = "/contact" element = {<Contact />} />

     </Routes>

     </Router>


    </div>
  );
};

export default App;