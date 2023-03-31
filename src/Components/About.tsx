import React from "react";
import "./css/About.css";
import Stack from "./data/Stack";
const About = () => {
  return (
    <>
      <div className="about_main">
        <div className="about_info">
          <div className="about_img"></div>
          <div className="about_text">안녕하세요</div>
          <Stack />
        </div>
      </div>
    </>
  );
};

export default About;
