import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Luis.css";

const Luis = () => {
  return (
    <>
      <div className="luis_main">
        <div className="luis_container">
          <h3>Hello, everyOne</h3>
          <div className="luis_text">
            I’m <span className="main_name"> Luis </span> stack Web Developer
            <p className="main_content">
              저는 효율적이고 확장 가능한 코드를 작성하여 웹 애플리케이션의
              성능과 안정성을 유지하며 사용자들이 즐겁게 사용할 수 있는
              인터페이스를 구현합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Luis;
