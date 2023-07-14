// RandomColorBackground.js
import React, { useState, useEffect } from "react";

const RandomColorBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    const colors = ["#c8c8c8", "red", "blue", "green", "yellow", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor }} className="random-color-background"></div>
  );
};

export default RandomColorBackground;
