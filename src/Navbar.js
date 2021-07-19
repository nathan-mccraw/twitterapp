import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-start navbar-light bg-light p-2 pb-3 border-bottom border-info bg-white">
      <div className="navbar-nav me-4">
        <div className="navbar-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            activeClassName="activeLink"
            exact
            to="/"
          >
            MockingJay <i className="bi bi-info-circle "></i>
          </NavLink>
        </div>
      </div>
      <div className="d-flex navbar-nav me-4">
        <div className="navbar-item">
          <NavLink
            className="nav-link active activeLink"
            aria-current="page"
            exact
            to="/SearchResults"
          >
            Search Results
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
