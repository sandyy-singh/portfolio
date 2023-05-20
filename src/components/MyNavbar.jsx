import React from "react";
import {  Container,  Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import vg from "../assets/sandeep_singh.png";
import "bootstrap/dist/css/bootstrap.min.css";
function MyNavbar() {
  return (


          <Navbar fixed="top" variant="light" bg="light" expand="md" className="navbar">
            <Container>
            
              <Navbar.Brand>
                <img src={vg} alt="vg" height="50" width="50" className="align-top img1" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="my-nav" />

              <Navbar.Collapse id="my-nav" fixed="top" variant="dark" bg="dark" expand="lg "   >
                <Nav className="me-auto bg-light  text-center nav11"  >
                  <Nav.Link as={Link} to={"/#home"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/#Gallery"}>Gallery </Nav.Link>
                  <Nav.Link as={Link} to={"/#Experience"}>Experience </Nav.Link>
                  <Nav.Link as={Link} to={"/#brands"}>Projects</Nav.Link>
                  <Nav.Link as={Link} to="/ContactUs">Contact</Nav.Link>
                  

                </Nav>
                
              </Navbar.Collapse>
              
            </Container>

          </Navbar>

  );
}

export default MyNavbar;
