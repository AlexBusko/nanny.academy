import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.scss";

const EventCard = ({ id, hidden, title, location, date, time }) => {
  let { url } = useRouteMatch();
  return (
    <div
      className={hidden ? "event-card-wrapper hidden" : "event-card-wrapper hover"}
    >
      <Link to={hidden ? undefined : `${url}/${id}`} className={"link"}>
        <div className="event-card">
          <h2 className="title">{title}</h2>
          <div className="info">
            <span className="time">{time}</span>
            <span className="date">{date}</span>
            <span className="location">{location}</span>
          </div>
        </div>
        <div className="event-card-back"></div>
      </Link>
    </div>
  );
};

export default EventCard;
