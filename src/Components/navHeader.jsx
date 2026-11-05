import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonComp from "../Components/ButtonComp"
import Images from './Images';
import imag from "../assets/logo.png"
import { useState } from 'react';

function NavHeader() {

  const navC = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar expand="lg" className="px-md-5 py-md-3">
      <Container fluid className='px-md-0 mx-md-5 d-flex gap-md-5 '>
        <Navbar.Brand href="/" className=''>
            <Images src={imag}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto w-100 justify-content-end gap-md-5 d-flex  navBar">
            <Nav.Link style={navC} className='nav-link' href="/">Home</Nav.Link>
            <Nav.Link style={navC} className='nav-link' href="/About">About</Nav.Link>

            <NavDropdown style={navC} className='custom-service-dropdown'
            show={isOpen}           
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)} 
            onToggle={(val) => setIsOpen(val)}  title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item style={navC} href="/Residential">Residential Cleaning</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/Janitorial">Janitorial Cleaning</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/Material">Supply Of Materials</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/Post+Construction">Post Construction Cleaning</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/Fumigation">Fumigation/Pest Control</NavDropdown.Item>
              <NavDropdown.Item style={navC} href="/Industrial">Industrial Cleaning</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={navC} className='nav-link' href="/Blog">Blog</Nav.Link>
            <Nav.Link style={navC} className='nav-link' href="/Project">Project</Nav.Link>
            <Nav.Link style={navC} className='nav-link' href="/Contact">Contact</Nav.Link>
            <ButtonComp address="/Login" buttonClass="butBrownClass" buttonText="Login"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;