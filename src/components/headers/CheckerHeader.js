import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const CheckerHeader = () => {
  return (
    <Navbar
      className="checker-header"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Nanny.Checker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CheckerHeader;
