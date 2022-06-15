import React from 'react';
import logo from '../../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      
        //    <Nav>
        //     <Link to='/'>Home</Link>
        //     <Link to='/about'>About</Link>
        //    </Nav>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} alt='' height='40px'/>
          </Navbar.Brand>
          <Nav className="nav p-2">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>



 
    );
};

export default Header;