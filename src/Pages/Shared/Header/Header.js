import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './Header.css'

const Header = () => {
    return (
        <div>
           <Nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
           </Nav>
        </div>
    );
};

export default Header;