import { NavLink } from "react-router-dom";
import { useState } from "react";

const SearchNavbar = ({ handleSubmit, setSearchedText, searchedText }) => {
  const [isViewingTweets, setIsViewingTweets] = useState(false);
  const [isViewingUser, setIsViewingUser] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom pt-1 pb-1"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="col-auto d-md-flex mx-auto ms-md-1">
        <div className="col-auto ms-md-4 mx-auto">
          <div className="navbar-nav">
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
        <div className="row justify-content-between">
          <div className="col-auto navbar-nav me-4">
            <div className="navbar-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                activeClassName="text-primary"
                exact
                to="/SearchResults/Tweets"
                isActive={(match, location) => {
                  if (match) {
                    setIsViewingTweets(true);
                    setIsViewingUser(false);
                  }

                  return match;
                }}
              >
                {isViewingTweets ? (
                  <i className="bi bi-caret-down-square me-1"></i>
                ) : (
                  <i className="bi bi-caret-right me-1"></i>
                )}
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
                isActive={(match, location) => {
                  if (match) {
                    setIsViewingTweets(false);
                    setIsViewingUser(true);
                  }
                  return match;
                }}
              >
                {" "}
                {isViewingUser ? (
                  <i className="bi bi-caret-down-square me-1"></i>
                ) : (
                  <i className="bi bi-caret-right me-1"></i>
                )}
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchNavbar;
