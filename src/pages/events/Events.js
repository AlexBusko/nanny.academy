import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "../../components/eventCard/EventCard";
import "./style.scss";

const Events = () => {
  return (
    <div className="events-wrapper">
      <div className="events">
        <Container>
          <Row md={4} className="grid-row">
            <Col className="grid-col">
              <EventCard
                id={"firstEvent"}
                title={"NannyVentures Crypto Meetup"}
                location={"Futura HUB, вул.Кульпарківська, буд.100б"}
                date={"30 липня"}
                time={"19:00"}
              />
            </Col>
            <Col className="grid-col">
              <EventCard
                hidden
                id={"firstEvent"}
                title={"NannyVentures Crypto Meetup"}
                location={"Futura HUB, вул. Кульпарківська 100б"}
                date={"30 липня"}
                time={"19:00"}
              />
            </Col>
            <Col className="grid-col">
              <EventCard
                hidden
                id={"firstEvent"}
                title={"NannyVentures Crypto Meetup"}
                location={"Futura HUB, вул. Кульпарківська 100б"}
                date={"30 липня"}
                time={"19:00"}
              />
            </Col>
            <Col className="grid-col">
              <EventCard
                hidden
                id={"firstEvent"}
                title={"NannyVentures Crypto Meetup"}
                location={"Futura HUB, вул.Кульпарківська, буд.100б"}
                date={"30 липня"}
                time={"19:00"}
              />
            </Col>
            <Col className="grid-col">
              <EventCard
                hidden
                id={"firstEvent"}
                title={"NannyVentures Crypto Meetup"}
                location={"Futura HUB, вул. Кульпарківська 100б"}
                date={"30 липня"}
                time={"19:00"}
              />
            </Col>
            <Col className="grid-col">
              <EventCard
                hidden
                id={"firstEvent"}
                title={"NannyVentures Crypto Meetup"}
                location={"Futura HUB, вул. Кульпарківська 100б"}
                date={"30 липня"}
                time={"19:00"}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="events-back"></div>
    </div>
  );
};

export default Events;
