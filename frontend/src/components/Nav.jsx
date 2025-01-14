import "../styles/nav.css";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Nav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav id="nav">
        <div className="scallop">
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
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
