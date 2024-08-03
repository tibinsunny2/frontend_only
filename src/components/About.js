import React from "react";
import "./about.css";
import about from "../../src/images/About-us.jpg";

const About = () => {
  return (
    <div className="about-component">
      <div className="about">
        <h2 className="about-heading" style={{ color: "#1c92d2" }}>
          About Us
        </h2>
        <p className="about-description">
          Welcome to VentureVista, where your journey begins and possibilities
          are limitless! At VentureVista, we're more than just a travel
          application; we're your trusted navigator in the world of exploration.
          Founded by passionate travelers, our mission is to transform the way
          you experience and share your adventures. In the vast landscape of
          travel, VentureVista stands out as your go-to companion, offering a
          seamless blend of cutting-edge technology and a personal touch. Our
          intuitive interface empowers you to plan your trips effortlessly,
          discover hidden gems, and immerse yourself in the essence of each
          destination.
          <br />
          <hr
            style={{
              marginTop: "20px",
              width: "50%",
              marginLeft: "25%",
              backgroundColor: "#1c92d2",
            }}
          />
        </p>
      </div>
      <div className="about--img">
        <img src={about} alt="About" />
      </div>
    </div>
  );
};

export default About;
