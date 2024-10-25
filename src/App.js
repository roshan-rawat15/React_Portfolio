import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import Home from './containers/home' // Adjust the path as necessary
import About from './containers/about'; // Adjust the path as necessary
import Resume from './containers/resume'; // Adjust the path as necessary
import Skills from './containers/skills'; // Adjust the path as necessary
import Portfolio from './containers/portfolio'; // Adjust the path as necessary
import Contact from './containers/contact'; // Adjust the path as necessary
import Navbar from "./components/navBar";
// import particlesOptions from './utils.js/particles';// Import the particles options

function App() {

 const location = useLocation();
 console.log(location);
 

  // const handleInit = async (main)=>{
  //   await loadFull(main)
  // }

    const renderPartclesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {
        renderPartclesJsInHomePage
      }

      {/* <Particles id="particles" options={particlesOptions} init={handleInit} /> */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}

      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;