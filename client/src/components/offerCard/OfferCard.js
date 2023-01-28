import React from "react";
import "./style.scss";

export const OfferCard = ({text, title, style}) => {
  return (
    <div className={`offer-card-wrapper ${style.wrapper}`}>
      <div className={`offer-card ${style.main}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={`offer-card-back ${style.back}`}></div>
    </div>
  );
};
