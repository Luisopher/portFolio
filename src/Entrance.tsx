import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import Luis from "./Components/Luis";
import Header from "./Components/Header";
import TimeLine from "./Components/TimeLine";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import "./Entrance.css";

function Entrance(): JSX.Element {
  const completionText = "나를 알고싶은 모든 사람들을 위한 페이지";
  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [showLuis, setShowLuis] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typingComplete && boxRef.current && containerRef.current) {
      const boxHeight = boxRef.current.offsetHeight;
      containerRef.current.style.height = `${boxHeight}px`;
      setShowLuis(true);
    }
  }, [typingComplete]);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prevDisplayText) => {
        const nextChar = completionText.charAt(i);
        i++;
        if (i > completionText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypingComplete(true);
          }, 1000);
        }
        return prevDisplayText + nextChar;
      });
    }, 100);
    return () => clearInterval(typingInterval);
  }, [completionText]);

  return (
    <>
      <div className="container" ref={containerRef}>
        <div className="box" ref={boxRef}>
          {!typingComplete && (
            <h1 className="main_text" style={{ textAlign: "center" }}>
              {displayText}
            </h1>
          )}
          {typingComplete && (
            <div
              className="overlay"
              style={{ display: showLuis ? "none" : "block" }}
            />
          )}
        </div>
      </div>
      {showLuis && (
        <div className="luis">
          <Header />
          <Luis />
          <TimeLine />
          <Work />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Entrance;
