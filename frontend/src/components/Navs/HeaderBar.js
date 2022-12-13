import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

export const HeaderBar = () => {
  return (
    <Navbar>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>The Confessional</Navbar.Brand>
      </LinkContainer>
      </Container>
      <Nav className="ms-auto">
        <LinkContainer to="/">
          <Nav.Link>
            Sign In/Register
          </Nav.Link>
          </LinkContainer>
      </Nav>
    </Navbar>
  )
}