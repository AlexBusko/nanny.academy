import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <Navbar
      className="header"
      bg="primary"
      variant="light"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Link to="/" className="brand">
          <Navbar.Brand >
            Nanny.Academy
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/events" className="link">
                Події
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses" className="link">
                Курси
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
