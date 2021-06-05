import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";


export default function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Gallary</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Animals">Animals</Nav.Link>
              <Nav.Link href="/Birds">Birds</Nav.Link>
              <Nav.Link href="/Fruits">Fruits</Nav.Link>
              <Nav.Link href="/Vegitables">Vegitables</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
