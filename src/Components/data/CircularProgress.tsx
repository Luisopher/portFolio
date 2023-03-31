import React, { useEffect } from "react";
import "./CircularProgress.css";

interface CircularProgressProps {
  percentage: number;
  isVisible: any;
  stackName: string;
}

function CircularProgress({
  percentage,
  isVisible,
  stackName,
}: CircularProgressProps) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  useEffect(() => {
    console.log(stackName);
  }, [stackName]);
  return (
    <>
      <div className="stack_circle">
        <svg viewBox="0 0 100 100">
          <circle
            className="circle circle-progress"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: isVisible
                ? circumference - progress
                : circumference,
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke-dashoffset 3s ease-in-out",
            }}
          />
        </svg>
        <span className="propsName">{stackName}</span>
      </div>
    </>
  );
}

export default CircularProgress;
