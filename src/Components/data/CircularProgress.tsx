import React from "react";
import "./CircularProgress.css";

interface CircularProgressProps {
  percentage: number;
  isVisible: any;
}

function CircularProgress({ percentage, isVisible }: CircularProgressProps) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  return (
    <>
      <svg viewBox="0 0 100 100" className="stack_circle">
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
    </>
  );
}

export default CircularProgress;
