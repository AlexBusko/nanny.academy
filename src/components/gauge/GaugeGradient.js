import React from "react";

const GradientSVG = () => {
  const lol = "lol";
  const startColor = "#7D40FF";
  const endColor = "#02A4FF";

  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={lol} gradientTransform={"rotate(120)"}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
