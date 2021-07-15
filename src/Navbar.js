import { NavLink } from "react-router-dom";

const Navbar = ({ searchedUser, setSearchedUser, handleSubmit }) => {
  return (
    <nav className="navbar justify-content-start navbar-light bg-light p-2 pb-3 border-bottom border-info bg-white">
      <div className="col-auto d-flex navbar-nav">
        <form
          className="d-flex rounded-pill border border-info me-4"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control me-2 rounded-pill border-0"
            value={searchedUser}
            onChange={(e) => setSearchedUser(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-info border-0 rounded-circle"
            type="submit"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div className="navbar-nav me-4">
        <div className="navbar-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            activeClassName="activeLink"
            exact
            to="/"
          >
            MockingJay
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
      <div className="navbar-nav" id="info">
        <div className="navbar-item">
          <NavLink
            className="nav-link active activeLink"
            aria-current="page"
            exact
            to="/Info"
          >
            Info <i className="bi bi-info-circle "></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
