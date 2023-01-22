import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import { ThemeContext } from "../../context/ThemeContext";

const CheckerHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      className="checker-header"
      id={theme === "dark" ? "header-dark" : "header-light"}
      variant={theme === "dark" ? "dark" : "light"}
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Nanny.Checker
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <button onClick={toggleTheme}>{theme}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CheckerHeader;
