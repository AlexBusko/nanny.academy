import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import PrimaryButton from "../../components/button/PrimaryButton";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Row className="main-content-container">
          <Col className={"navigation"}>
            <Link to="/courses">КУРСИ</Link>
            <Link to="/events">ПОДІЇ</Link>
            <Link to="/aboutus">ПРО НАС</Link>
          </Col>
          <Col className={"contacts"}>
            <h3>Контакти:</h3>
            <span className="email">Email:</span>
            <span>info@nanny.ventures</span>
            <div className="media-icons">
              <a className={"icon"} href="https://www.facebook.com/nanny.acdm">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                className={"icon"}
                href="https://www.instagram.com/nanny.acdm/?fbclid=IwAR3Z8Yu6RNOugMRnMkvnduMZ5CJFHlpaCtzejtLzs32YyUOeG51-BsER6ME"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className={"icon"} href="https://nanny.ventures">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </Col>
          <Col className={"subscribe"}>
            <h3>Підпишись на наші оновлення</h3>
            <PrimaryButton title={"Підписатись"} />
          </Col>
        </Row>
        <Row className={"divider"}>
          <Col className={"line-col"}>
            <hr className={"line"} />
          </Col>
          <Col className={"logo-col"}>
            <h3>Nanny.Academy</h3>
          </Col>
        </Row>
        <Row className={"footer-info"}>
          <Col><span>© 2021, All right reserved. Nanny Ventures</span></Col>
          <Col className="creator"><a href="http://convalia.digital" >convalia.digital</a></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
