import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.scss";

const Header = () => {
  return (
    <Navbar className="header" bg="primary" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand" href="#home">Nanny.Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="link" href="#home">Події</Nav.Link>
            <Nav.Link className="link"  href="#link">Курси</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
