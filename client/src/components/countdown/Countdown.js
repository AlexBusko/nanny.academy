import React, { useState, useEffect } from "react";
import "./style.scss";

const Countdown = ({ date, message }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`${date}`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="wrapper">
        {<p className="number">{timeLeft[interval]}</p>}
        {(() => {
          if (interval.toString() === "days") {
            if (/\b(11|12|13|14)\b/.test(timeLeft[interval].toString())) {
              return <p className="scale">днів</p>;
            } else if (/1$/.test(timeLeft[interval].toString())) {
              return <p className="scale">день</p>;
            } else if (/[234]$/.test(timeLeft[interval].toString())) {
              return <p className="scale">дні</p>;
            } else {
              return <p className="scale">днів</p>;
            }
          }
          if (interval.toString() === "hours") {
            if (/\b(11|12|13|14)\b/.test(timeLeft[interval].toString())) {
              return <p className="scale">годин</p>;
            } else if (/1$/.test(timeLeft[interval].toString())) {
              return <p className="scale">година</p>;
            } else if (/[234]$/.test(timeLeft[interval].toString())) {
              return <p className="scale">години</p>;
            } else {
              return <p className="scale">годин</p>;
            }
          }
          if (interval.toString() === "minutes") {
            if (/\b(11|12|13|14)\b/.test(timeLeft[interval].toString())) {
              return <p className="scale">хвилин</p>;
            } else if (/1$/.test(timeLeft[interval].toString())) {
              return <p className="scale">хвилина</p>;
            } else if (/[234]$/.test(timeLeft[interval].toString())) {
              return <p className="scale">хвилини</p>;
            } else {
              return <p className="scale">хвилин</p>;
            }
          }
          if (interval.toString() === "seconds") {
            if (/\b(11|12|13|14)\b/.test(timeLeft[interval].toString())) {
              return <p className="scale">секунд</p>;
            } else if (/1$/.test(timeLeft[interval].toString())) {
              return <p className="scale">секунда</p>;
            } else if (/[234]$/.test(timeLeft[interval].toString())) {
              return <p className="scale">секунди</p>;
            } else {
              return <p className="scale">секунд</p>;
            }
          }
        })()}{" "}
      </div>
    );
  });

  return (
    <div className="countdown">
      {timerComponents.length ? timerComponents : <span>{message}</span>}
    </div>
  );
};

export default Countdown;
