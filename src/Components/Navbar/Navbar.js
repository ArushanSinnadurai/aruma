import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./logo512.png";
import "./Navbar.css";

class CustomNavbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <img className="navBarLogo" src={logo} width="100" height="100" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/about">HOME</Nav.Link>
                <Nav.Link href="/about">ABOUT US</Nav.Link>
                <Nav.Link href="/contact">BLOGS</Nav.Link>
                <Nav.Link href="/contact">CONTACT INFO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar;
