import { NavLink } from "react-router-dom";

const SearchNavbar = ({ handleSubmit, setSearchedText, searchedText }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom pt-1 pb-1"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="col-auto ms-4">
        <div className="d-flex navbar-nav">
          <form
            className="d-flex rounded-pill border border-info bg-light me-4"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control shadow-none me-2 rounded-pill border-0 bg-light"
              value={searchedText}
              onChange={(e) => setSearchedText(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info border-0 rounded-circle shadow-none"
              type="submit"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="col-auto navbar-nav me-4">
        <div className="navbar-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            activeClassName="text-primary"
            exact
            to="/SearchResults/Tweets"
          >
            Tweets
          </NavLink>
        </div>
      </div>
      <div className="col-auto navbar-nav me-4">
        <div className="navbar-item">
          <NavLink
            activeClassName="text-primary"
            className="nav-link active"
            aria-current="page"
            exact
            to="/SearchResults/Users"
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SearchNavbar;