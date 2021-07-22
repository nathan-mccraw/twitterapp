import { NavLink, useHistory } from "react-router-dom";
import Logo from "./pictures/Mockingjay.png";

const Navbar = () => {
  let history = useHistory();

  return (
    <nav className="navbar justify-content-start navbar-light bg-light p-2 pb-3 border-bottom border-info bg-white">
      <div className="navbar-nav">
        <div className="navbar-item d-flex">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "70px" }}
            className="p-0 m-0 me-2"
          />
          <NavLink
            className="nav-link"
            aria-current="page"
            activeClassName="text-primary"
            exact
            to="/"
          >
            MockingJay <i className="bi bi-info-circle "></i>
          </NavLink>
        </div>
      </div>
      <div className="navbar-nav">
        <div className="navbar-item d-flex align-items-center">
          <i className="bi bi-dot ms-4 me-4"></i>
          <NavLink
            activeClassName="text-primary"
            className="nav-link"
            aria-current="page"
            exact
            to="/SearchResults/Tweets"
          >
            Search
          </NavLink>
        </div>
      </div>
      <div className="navbar-nav">
        <div className="navbar-item d-flex align-items-center">
          <i className="bi bi-dot ms-4 me-4"></i>
          <NavLink
            activeClassName="text-primary"
            className="nav-link"
            aria-current="page"
            exact
            to="/Favorites"
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
