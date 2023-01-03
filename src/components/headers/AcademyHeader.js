import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const AcademyHeader = () => {
  return (
    <Navbar
      className="academy-header"
      bg="primary"
      variant="light"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Link to="/" className="brand">
          <Navbar.Brand>Nanny.Academy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/events"
              children="Події"
              className="link"
            />
            <Nav.Link
              as={Link}
              to="/courses"
              children="Курси"
              className="link"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AcademyHeader;
