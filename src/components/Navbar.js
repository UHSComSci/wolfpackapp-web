import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './src/App.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavbarCustom = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            
            <Nav.Link className = "nav-formatting" href="#blog" >Home</Nav.Link>
            <Nav.Link href="#about-us">Links</Nav.Link>
            <Nav.Link href="#">Student</Nav.Link>
            <Nav.Link href="#">Clubs</Nav.Link>
            <Nav.Link href="#">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}

export default NavbarCustom