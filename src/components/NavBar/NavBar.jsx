import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navigation">
      <div className="container">
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}
