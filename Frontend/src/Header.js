import React from 'react';
import { Navbar } from 'react-bootstrap';
import image from './images/translate.jpg';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <img src={image} alt='logo' width='50' height='50'/>
    <Navbar.Brand>M.LK Translate</Navbar.Brand>
  </Navbar>
);

export default Header;