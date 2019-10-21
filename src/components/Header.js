import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="navbar"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand href="/" className="logo-text">
        MyReads
      </Navbar.Brand>

      <Nav.Link id="mysite" href="www.deandreboston.com" className="navl">
        Portfolio
      </Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Navbar>
  );
};

export default Header;
