import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

import { FaFacebookSquare, FaTwitterSquare, FaSearch } from "react-icons/fa";
import { useState } from 'react';

export const HeaderBar = () => {
  const [ search, setSearch ] = useState('');
  console.log(search)
  return (
    <Navbar>
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand className="title">The Confessional</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
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
              value={search}
              onChange={(evt) => setSearch(evt.target.value)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}