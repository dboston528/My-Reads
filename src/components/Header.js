import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand>MyReads</Navbar.Brand>
      <Nav.Link href="/">My Site</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Navbar>
  );
};

export default Header;
