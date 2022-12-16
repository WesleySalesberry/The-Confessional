import { useContext, useState } from "react"

import { LinkContainer } from 'react-router-bootstrap'
import { FaFacebookSquare, FaTwitterSquare, FaSearch } from "react-icons/fa";

import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useNavigate } from "react-router-dom";

export const HeaderBar = () => {
  const navigate = useNavigate()

  const handleKeyDown = (evt) => {
    if(evt.key === 'Enter'){
      navigate(`/search/${evt.target.value}`)
    }
  }

  return (
    <Navbar>
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand className="title">The Confessional</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/privacy">
              <Nav.Link>Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            <FaFacebookSquare
              className="nav-icon facebook" 
            />
            <FaTwitterSquare
              className="nav-icon twitter mx-3" 
            />
            <FaSearch
              className="nav-icon me-2" 
            />
            <input
              className="form-control form-control-sm rounded" 
              type="search"
              placeholder="Search"
              aria-label="Search Text"
              aria-describedby="searchText"
              onKeyDown={handleKeyDown}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}