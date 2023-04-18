import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
// import PrimaryButton from "../../button/PrimaryButton";
import { Link } from "react-router-dom";
import "./style.scss";

const CheckerFooter = () => {
  return (
    <Container fluid className="checker-footer">
      <Row className="row-container container">
        <Col xs={6} lg={4} className="navigation">
          <h4>Navigation:</h4>
          {/* <Link to="/courses">КУРСИ</Link>
          <Link to="/events">ПОДІЇ</Link> */}
          <Link to="/aboutus">ABOUT US</Link>
          <Link to="/checker">CHECKER</Link>
        </Col>
        <Col xs={6} lg={4} className={"contacts"}>
          <h4>Contacts:</h4>
          <span className="email">Email:</span>
          <span>info@nanny.ventures</span>
          <div className="media-icons">
            <a className="icon" href="https://www.facebook.com/nanny.acdm">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/nanny.acdm/?fbclid=IwAR3Z8Yu6RNOugMRnMkvnduMZ5CJFHlpaCtzejtLzs32YyUOeG51-BsER6ME"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="icon" href="https://nanny.ventures">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a className="icon" href="https://discord.gg/weSuTQ2Dx7">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <h3>Nanny.Academy</h3>
          <span>© 2021, All right reserved. Nanny Ventures</span>
          <a href="http://convalia.digital">convalia.digital</a>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckerFooter;
