import React, { useRef, useEffect } from "react";
import "./Entrance.css";
const Entrance = () => {
  type Coordinate = {
    x: number;
    y: number;
  };

  type DrawState = {
    isDrawing: boolean;
    lastPosition: Coordinate;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const drawState: DrawState = {
      isDrawing: false,
      lastPosition: { x: 0, y: 0 },
    };

    const updateLastPosition = (event: MouseEvent): void => {
      drawState.lastPosition = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
      };
    };

    const startDrawing = (event: MouseEvent): void => {
      drawState.isDrawing = true;
      updateLastPosition(event);
    };

    const stopDrawing = (): void => {
      drawState.isDrawing = false;
    };

    const drawLine = (event: MouseEvent): void => {
      if (!drawState.isDrawing) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const currentPosition: Coordinate = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
      };

      ctx.beginPath();
      ctx.moveTo(drawState.lastPosition.x, drawState.lastPosition.y);
      ctx.lineTo(currentPosition.x, currentPosition.y);
      ctx.stroke();

      drawState.lastPosition = currentPosition;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", drawLine);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", drawLine);
    };
  }, [canvasRef]);

  return (
    <div className="canvas-wrapper">
      <canvas ref={canvasRef} id="my-canvas"></canvas>
    </div>
  );
};

export default Entrance;
