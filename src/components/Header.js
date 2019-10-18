import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Nav.Link href="deandreboston.com">My Site</Nav.Link>
      <NavItem>About</NavItem>
    </Navbar>
  );
};

export default Header;
