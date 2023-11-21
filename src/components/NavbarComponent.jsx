import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">Classics Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
            <Nav.Link as={Link} to="/miPerfil">Mi Perfil</Nav.Link>
            <NavDropdown title="Inicia sesión/Registrate" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                Inicia Sesión
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                Registrate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

