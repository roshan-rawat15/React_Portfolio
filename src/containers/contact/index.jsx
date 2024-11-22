import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { useSpring, animated } from "@react-spring/web";
import "./styles.scss";

const Contact = () => {
  // Define animations
  const headerAnimation = useSpring({
    from: { transform: "translateX(-200px)" },
    to: { transform: "translateX(0px)" },
    config: { duration: 1000 },
  });

  const formAnimation = useSpring({
    from: { transform: "translateX(-200px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { duration: 1000 },
    delay: 200, // Add delay for staggered effect
  });

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        {/* Animated header */}
        <animated.h3
          style={headerAnimation}
          className="contact__content__header-text"
        >
          Let's Talk
        </animated.h3>

        {/* Animated form */}
        <animated.div style={formAnimation} className="contact__content__form">
          <div className="contact__content__form__controlswrapper">
            <div>
              <input required name="name" className="inputName" type="text" />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input required name="email" className="inputEmail" type="text" />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <input
                required
                name="description"
                className="inputDescription"
                type="text"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </animated.div>
      </div>
    </section>
  );
};

export default Contact;
