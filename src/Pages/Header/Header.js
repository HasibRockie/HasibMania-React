import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "./Hasib.png";

const Header = () => {
  return (
    <Navbar className="header" bg="dark" variant="dark" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto pr-3">
            <Nav.Link href="/"> হোম </Nav.Link>
            <Nav.Link href="/personals">ব্যক্তিগত-ব্লগ </Nav.Link>
            <Nav.Link href="/others">ধর্মীয়-ব্লগ </Nav.Link>
            
            <Nav.Link href="/blogs">বিবিধ-ব্লগ </Nav.Link>
            <Nav.Link href="/gratitude"> কৃতজ্ঞতা </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
            <img src={logo} height="100px" alt="" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
