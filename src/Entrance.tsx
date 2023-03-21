import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import Luis from "./Components/Luis";
import Header from "./Components/Header";
import TimeLine from "./Components/TimeLine";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./Entrance.css";
const SCROLL_AMOUNT = 937;
function Entrance(): JSX.Element {
  const completionText = "나를 알고싶은 모든 사람들을 위한 페이지";
  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [showLuis, setShowLuis] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const luisRef = useRef<HTMLDivElement>(null);
  const timeLineRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);
  const scrollingRef = useRef<boolean>(false);
  useLayoutEffect(() => {
    if (typingComplete && boxRef.current && containerRef.current) {
      boxRef.current.style.display = "none";
      boxRef.current.style.height = "0px";
      containerRef.current.style.height = "0px";
      containerRef.current.style.display = "none";
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
  const scrollToLuis = () => {
    if (luisRef.current) {
      window.scrollTo({ top: luisRef.current.offsetTop, behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    if (AboutRef.current) {
      window.scrollTo({ top: AboutRef.current.offsetTop, behavior: "smooth" });
    }
  };

  const scrollToTimeLine = () => {
    if (timeLineRef.current) {
      window.scrollTo({
        top: timeLineRef.current.offsetTop,
        behavior: "smooth",
      });
      console.log("움직였다");
    }
  };

  const scrollToWork = () => {
    if (workRef.current) {
      window.scrollTo({ top: workRef.current.offsetTop, behavior: "smooth" });
    }
  };

  //마우스 스크롤 기능

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (!scrollingRef.current) {
      scrollingRef.current = true;
      const deltaY = event.deltaY;
      const scrollSpeed = 20;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let targetScrollTop;
      if (deltaY > 0) {
        targetScrollTop = Math.ceil(scrollTop / SCROLL_AMOUNT) * SCROLL_AMOUNT;
        targetScrollTop += SCROLL_AMOUNT;
      } else {
        targetScrollTop = Math.floor(scrollTop / SCROLL_AMOUNT) * SCROLL_AMOUNT;
        targetScrollTop -= SCROLL_AMOUNT;
      }
      const duration = Math.abs(targetScrollTop - scrollTop) / scrollSpeed;
      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        scrollingRef.current = false;
      }, duration);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
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
          <Header
            onLuisClick={scrollToLuis}
            onTimeLineClick={scrollToTimeLine}
            onWorkClick={scrollToWork}
            onAboutClick={scrollToAbout}
          />
          <div className="section" ref={luisRef}>
            <Luis />
          </div>
          <div className="section" ref={AboutRef}>
            <About />
          </div>{" "}
          <div className="section" ref={workRef}>
            <Work />
          </div>
          <div className="section" ref={timeLineRef}>
            <TimeLine />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Entrance;
