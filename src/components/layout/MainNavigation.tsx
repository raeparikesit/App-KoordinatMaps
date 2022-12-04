import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <span role="img" aria-label="map">
            🗺️
          </span>{" "}
         App Koordinat Peta
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/form" className="nav-link">
              Maps
            </Link>
            <Link to="/home" className="nav-link">
              Koordinat
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
