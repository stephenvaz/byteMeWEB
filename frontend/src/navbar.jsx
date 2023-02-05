import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar  from 'react-bootstrap/Navbar' 
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Logo1 from './images/Removal-765.png'

function LoginOrLogout() {
  if (localStorage.getItem("isIn") == 'true') {
    const handleLogout = () => {
      localStorage.setItem("isIn", 'false');
      window.location.href = "/";
    }
    return (
      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      <AccountCircleIcon style={{fontSize: "45px"}} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
       <a className='icon' href='/eventadd'> 
       <AddCircleOutlineIcon style={{marginRight:"4px",color:"black"}}/> 
          Add Event
       </a>
          </Dropdown.Item>
        <Dropdown.Item href="#/action-2"> 
        <a className='icon' onClick={handleLogout}>
      <LogoutIcon style={{marginRight:"5px",color:"black"}}/>
        Logout
        </a>
    </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
 
    
  
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
      <NavBar className='navBar fixed-top me-right'  variant="dark">
        <Container>
          <NavBar.Brand className='me-left' href="/home">
          <img
              alt=""
              src={Logo1}
              width="170px"
              height="150px"
              className="d-inline-block"
            />
            <h2 className='navTitle'>Somehow We Manage!</h2>
            </NavBar.Brand>
          <Nav className="me-right ">
            <a id="home" className='link' href="/home">Home</a>
            <a className='link' href="#section2">Event</a>
            <a className='link' href='/cal'>Calendar</a>
            {/* <a className='link' href="/login">Login</a> */}
            <LoginOrLogout />
          </Nav>
        </Container>
      </NavBar>
    </nav>
  );
}

export default NavB