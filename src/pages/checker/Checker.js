import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.scss";

const Checker = () => {
  return (
    <div className="checker-wrapper">
      <div className="checker">
        <Container>
          <Row md={3} className="grid-row">
            <Col className="grid-col"></Col>
            <Col>This is Checker</Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <div className="courses-back"></div>
    </div>
  );
};

export default Checker;
