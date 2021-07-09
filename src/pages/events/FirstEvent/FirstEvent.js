import React from "react";
import { Container } from "react-bootstrap";
import Countdown from "../../../components/countdown/Countdown";
import "./style.scss";

const FirstEvent = () => {
  return (
    <div className="event-page-wrapper">
      <div className="event-page">
        <Container>
          <h1>Наш перший івент</h1>
          <Countdown date={`07/30/2021/19:00`} message={"Подія відбулась"}/>
        </Container>
      </div>
      <div className="event-page-back"></div>
    </div>
  );
};

export default FirstEvent;
