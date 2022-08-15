import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar className="navigation" expand="lg">
      <Container fluid>
        <Navbar.Brand className="m-4">GOAL-DIGGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="btn btn-lg" to="/">
              MAP
            </Link>
            <Link className="btn btn-lg" to="/lists">
              BUCKET LIST
            </Link>
            <Link className="btn btn-lg" to="" onClick={handleLogOut}>
              LOG OUT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
