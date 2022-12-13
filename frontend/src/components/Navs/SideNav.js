import Nav from 'react-bootstrap/Nav';

export const SideNav = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark border border-secondary rounded">
      <ul className="navbar-nav flex-column text-start">
        <li className="nav-item">dream</li>
        <li className="nav-item">fantasies</li>
        <li className="nav-item">first experience</li>
        <li className="nav-item">quilt</li>
        <li className="nav-item">lies</li>
        <li className="nav-item">pain</li>
        <li className="nav-item">random</li>
        <li className="nav-item">truth</li>
        <li className="nav-item">experiences</li>
        <li className="nav-item">other</li>
      </ul>
    </Nav>
  )
}