import React from "react";
import {Navbar ,Nav } from 'react-bootstrap'

function navbar() {
    return (
    <Navbar bg="dark" variant="dark">
  
    <Navbar.Brand href="#home">Ambulance Reservation System</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#">Sign In</Nav.Link>
     
    </Nav>
 
  </Navbar>
    );
}

export default navbar;