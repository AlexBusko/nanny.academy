import React from "react";
import "./style.scss";

const EventCard = ({ id, hidden, title, location, date, time}) => {
  return (
    <div className={hidden ? "event-card-wrapper hidden" : "event-card-wrapper"}>
      <div className="event-card">
        <h2 className="title">{title}</h2>
        <div className="info">
          <span className="time">{time}</span>
          <span className="date">{date}</span>
          <span className="location">{location}</span>
        </div>
      </div>
      <div className="event-card-back"></div>
    </div>
  );
};

export default EventCard;
