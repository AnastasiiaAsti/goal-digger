import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <Nav className="navbar navbar-expand-lg fixed-top navigation">
      <Container>
        <span>Signed in as: {user.name}</span>
        <Link className="btn btn-lg" to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </Container>
    </Nav>
  );
}
