import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OfferCard } from "../../../components/offerCard/OfferCard";
import "./style.scss";

export const Offers = () => {
  return (
    <div className="offers-wrapper">
      <div className="offers">
        <Container>
          <h1>Що ми пропонуємо?</h1>
          <Row md={2}>
            <Col>
              <OfferCard
                style={{
                  wrapper: "course-offer-card-wrapper",
                  main: "course-offer-card",
                  back: "course-offer-card-background",
                }}
                title={"Курси"}
                text={
                  "На наших курсах ви здобудете необхідні знання та навички для можливосі орієнтування в середовищі криптоактивів"
                }
              />
            </Col>
            <Col>
              <OfferCard
                style={{
                  wrapper: "community-offer-card-wrapper",
                  main: "community-offer-card",
                  back: "community-offer-card-background",
                }}
                title={"Комюніті"}
                text={
                  "На наших курсах ви здобудете необхідні знання та навички для можливосі орієнтування в середовищі криптоактивів"
                }
              />
            </Col>
            <Col>
              <OfferCard
                style={{
                  wrapper: "events-offer-card-wrapper",
                  main: "events-offer-card",
                  back: "events-offer-card-background",
                }}
                title={"Події"}
                text={
                  "На наших курсах ви здобудете необхідні знання та навички для можливосі орієнтування в середовищі криптоактивів"
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="offers-back"></div>
    </div>
  );
};
