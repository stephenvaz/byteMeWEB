import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar  from 'react-bootstrap/Navbar' 
import './navbar.css'

function NavB() {
    return (
    <nav className='main-nav'>
      <NavBar className='navBar fixed-top'  variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-right ">
            <a className='link' href="#home">Home</a>
            <a className='link' href="#home">Event</a>
            <a className='link' href="#home">Section</a>
          </Nav>
        </Container>
      </NavBar>
    </nav>
  );
}

export default NavB