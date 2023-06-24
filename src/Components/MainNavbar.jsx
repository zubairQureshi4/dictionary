import { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar({setSignIn, gotWord, setProfile, profile}) {
  const [name, setName] = useState('')
  useEffect(()=>{
    const getData = async ()=>{
      if(localStorage.getItem('data')){
        const data = localStorage.getItem('data');
        const jsonData = await JSON.parse(data);
        setName(jsonData?.username);
      }
    }
    getData()
  },[])
  const logoutData = ()=>{
    localStorage.removeItem('data');
    setSignIn(true)
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className='mx-4'>Dictionary</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav>Word: {gotWord}</Nav>
          </Nav>
          <NavDropdown title={name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{setProfile(!profile)}}>
                {profile ? 'Dictionary': 'Profile'}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutData}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;