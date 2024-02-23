import React from 'react';
import { Navbar } from 'react-bootstrap';
import image from './images/translate.jpg';

const Header = () => (
  
    <Navbar bg="dark" variant="dark">
      <div style={{ marginRight : '10px', marginLeft : '10px' }}>
        <img src={image} alt='logo' width='50' height='50'/>
      </div>
      <Navbar.Brand> Translator </Navbar.Brand>
    </Navbar>
  
);

export default Header;