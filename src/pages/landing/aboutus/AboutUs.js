import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

export const AboutUs = () => {
  return (
    <div className={"aboutus-wrapper"}>
      <div className={"aboutus"}>
        <Container>
          <Row md={2} className="aboutus-grid">
            <Col></Col>
            <Col>
              <h1 className="title">Про нас</h1>
              <p className="text">
                Торгувати криптовалютою може кожен, що породжує велику кількість
                аматорів які мають базове розуміння і позиціонують себе
                професійними трейдерами та інвесторами.
              </p>
              <p className="text">
                Історія нашої команди розпочалася ще задовго до хайпу в сфері
                блокчейн технологій. Отримавши багаторічний досвід управління
                капіталом та пройшовши багато циклів на криптовалютному ринку
                було прийнято рішення про створення Nanny Ventures.{" "}
              </p>
              <p className="text">
                Мета Nanny Ventures допомогти кожному інвестору правильно
                інвестувати в цифрові активи та примножувати свій капітал.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={"aboutus-back"}></div>
    </div>
  );
};
