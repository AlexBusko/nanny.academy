import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

const FirstEvent = () => {
  return (
    <div className="event-page-wrapper">
      <div className="event-page">
        <Container>
          <h1>Наш перший івент</h1>
        </Container>
      </div>
      <div className="event-page-back"></div>
    </div>
  );
};

export default FirstEvent;
