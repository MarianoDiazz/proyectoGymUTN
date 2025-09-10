import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarGym() {
  return (
    <Navbar bg="dark" variant="dark"  sticky="top">
      <Container className="container-fluid">
        <Navbar.Brand as={Link} to="/">🏋️ GymX</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/planes">Planes</Nav.Link>
            <Nav.Link as={Link} to="/galeria">Galería</Nav.Link>
            <Nav.Link as={Link} to="/reservas">Reservas</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
