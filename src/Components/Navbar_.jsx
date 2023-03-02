import React from 'react'
import {Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart } from 'react-bootstrap-icons';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#stories">Stories</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"></FormControl>
            </Form>
          </Nav>
          <Nav>
            <button type="button" class="btn btn-light"><span class="bi bi-cart"><Cart/></span></button>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
