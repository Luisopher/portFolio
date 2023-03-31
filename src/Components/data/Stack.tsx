import React, { useEffect, useRef, useState } from "react";
import CircularProgress from "./CircularProgress";
import "./stack.css";

function Stack() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stackName, setStackName] = useState<string>("js");
  const [stackName2, setStackName2] = useState<string>("ts");
  const [stackName3, setStackName3] = useState<string>("react");
  const [stackName4, setStackName4] = useState<string>("css");

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
        <CircularProgress
          percentage={80}
          isVisible={isVisible}
          stackName={stackName}
        />
        <div className="stackName" onChange={() => stackName}></div>
      </div>

      <div className="stack_container">
        <CircularProgress
          percentage={10}
          isVisible={isVisible}
          stackName={stackName2}
        />
        <div className="stackName" onChange={() => stackName2}></div>
      </div>

      <div className="stack_container">
        <CircularProgress
          percentage={40}
          isVisible={isVisible}
          stackName={stackName3}
        />
        <div className="stackName" onChange={() => stackName3}></div>
      </div>

      <div className="stack_container">
        <CircularProgress
          percentage={100}
          isVisible={isVisible}
          stackName={stackName4}
        />
        <div className="stackName" onChange={() => stackName4}></div>
      </div>
    </div>
  );
}

export default Stack;
