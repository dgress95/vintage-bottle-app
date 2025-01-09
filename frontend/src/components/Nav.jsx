import "../styles/nav.css";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            <Link to="/map">Map View</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/create-bottle">Create Bottle</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
