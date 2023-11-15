import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Container,
} from "react-bootstrap";
import logo from "./logo512.png";
import "./Navbar.css";

class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img className="navBarLogo" src={logo} width="100" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT US</Nav.Link>
              <Nav.Link href="/contact">BLOGS</Nav.Link>
              <Nav.Link href="/contact">CONTACT INFO</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
