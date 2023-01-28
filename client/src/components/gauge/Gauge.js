import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.scss";
import GradientSVG from "./GaugeGradient";

const RadialGauge = ({ syncProgress }) => {
  return (
    <>
      <div className="trail-outside-box">
        <CircularProgressbarWithChildren
          value={100}
          strokeWidth={7}
          circleRatio={0.75}
          maxValue={100}
          minValue={0}
          background
          trailPadding={10}
          backgroundPadding={-1}
          styles={buildStyles({
            backgroundColor: "transparent",
            rotation: 1 / 2 + 1 / 8,
            pathColor: `#191932`,
            trailColor: `#191932`,
          })}
        >
          <CircularProgressbar
            value={syncProgress}
            text={`${syncProgress}%`}
            maxValue={100}
            minValue={0}
            circleRatio={0.75}
            strokeWidth={5}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              pathColor: `url(#lol)`,
              trailColor: `rgba(41, 41, 83, 0.62)`,
              pathTransitionDuration: 0.15,
              textColor: `url(#lol)`,
            })}
          />
        </CircularProgressbarWithChildren>
        <div className="trail-inside-box"></div>
      </div>
      <GradientSVG />
    </>
  );
};

export default RadialGauge;
