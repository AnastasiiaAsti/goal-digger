import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navigation">
      <div className="container">
        <span>Signed in as: {user.name}</span>
        <Link className="btn btn-lg" to="/lists">BUCKET LIST</Link>
        <Link className="btn btn-lg" to="/lists/new">ADD TO YOUR LIST</Link>
        <Link className="btn btn-lg" to="" onClick={handleLogOut}>LOG OUT</Link>
      </div>
    </nav>
  );
}
