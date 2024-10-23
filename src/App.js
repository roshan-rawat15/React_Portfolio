import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './containers/home' // Adjust the path as necessary
import About from './containers/about'; // Adjust the path as necessary
import Resume from './containers/resume'; // Adjust the path as necessary
import Skills from './containers/skills'; // Adjust the path as necessary
import Portfolio from './containers/portfolio'; // Adjust the path as necessary
import Contact from './containers/contact'; // Adjust the path as necessary
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;