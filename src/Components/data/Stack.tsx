import React, { useEffect, useRef, useState } from "react";
import CircularProgress from "./CircularProgress";
import "./stack.css";

function Stack() {
  const areaRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (areaRef.current) {
      observer.observe(areaRef.current);
    }

    return () => {
      if (areaRef.current) {
        observer.unobserve(areaRef.current);
      }
    };
  }, []);

  const transitionOption = isVisible ? "fill 1s ease-out" : "";

  return (
    <div ref={areaRef} className="myStack">
      <div className="stack_container">
        <CircularProgress percentage={80} isVisible={isVisible} />
        <h1>js</h1>
      </div>

      <div className="stack_container">
        <CircularProgress percentage={10} isVisible={isVisible} />
        <h1>ts</h1>
      </div>

      <div className="stack_container">
        <CircularProgress percentage={40} isVisible={isVisible} />
        <h1>react</h1>
      </div>

      <div className="stack_container">
        <CircularProgress percentage={100} isVisible={isVisible} />
        <h1>css</h1>
      </div>
    </div>
  );
}

export default Stack;
