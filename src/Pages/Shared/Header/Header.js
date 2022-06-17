import React from 'react';
import logo from '../../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
// import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="home"><img src={logo} alt='img'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
    );
};

export default Header;