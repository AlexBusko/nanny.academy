import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

export const Heading = () => {
  return (
    <>
      <div className="heading">
        <Container>
          <h1>Школа криптовалютної грамотності</h1>
        </Container>
      </div>
      <div className="heading-back"></div>
    </>
  );
};
