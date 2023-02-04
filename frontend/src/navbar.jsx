import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar  from 'react-bootstrap/Navbar' 
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function LoginOrLogout() {
  if (localStorage.getItem("isIn") == 'true') {
    const handleLogout = () => {
      localStorage.setItem("isIn", 'false');
      window.location.href = "/";
    }
    return (

  <a className='link' onClick={handleLogout}>
      {/* <AccountCircleIcon style={{fontSize: "40px"}} /> */}
      <LogoutIcon style={{marginRight:"5px"}}/>
        Logout
    </a>
    
  
    );
  }
  else {
    return (
      <a className='link' href="/login">
        <LoginIcon style={{marginRight:"5px"}}/>
        Login</a>
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