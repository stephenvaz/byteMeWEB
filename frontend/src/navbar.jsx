import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar  from 'react-bootstrap/Navbar' 
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function LoginOrLogout() {
  if (localStorage.getItem("isIn") == 'true') {
    const handleLogout = () => {
      localStorage.setItem("isIn", 'false');
      window.location.href = "/";
    }
    return (

  <a  onClick={handleLogout}>
      <AccountCircleIcon />
    </a>
    
  
    );
  }
  else {
    return (
      <a className='link' href="/login">Login</a>
    );
  }
}

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
            
            {/* <a className='link' href="/login">Login</a> */}
            <LoginOrLogout />
          </Nav>
        </Container>
      </NavBar>
    </nav>
  );
}

export default NavB