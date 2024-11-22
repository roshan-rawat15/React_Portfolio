import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Roshan Kumar <br />
          And I'm a <br />
          Full Stack Developer & Programming Language
        </h1>
      </div>

      <Animate  
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateY(550px)'
      }}

      end={{
        transform : 'translatex(0px)'
      }}
      >
        
        <div className="home__text-wrapper__contact-me">
          <button onClick={handleNavigateToContactPage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
