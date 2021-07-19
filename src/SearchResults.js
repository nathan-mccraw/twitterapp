import Users from "./Users";
import Favorites from "./Favorites";
import Tweets from "./Tweets";
import { NavLink } from "react-router-dom";

const SearchResults = ({
  userReturned,
  addFavorite,
  removeFavorite,
  favoriteUsers,
  tweetsReturned,
  getUserTweets,
  showUserAndTweets,
  searchedText,
  setSearchedText,
  handleSubmit,
}) => {
  return (
    <div className="container-fluid ms-4 me-0">
      <div className="row">
        <div className="col-auto border-end">
          <Favorites
            favoriteUsers={favoriteUsers}
            removeFavorite={removeFavorite}
            showUserAndTweets={showUserAndTweets}
          />
        </div>
        <div className="col ps-0">
          <div class="col mb-4 mt-0 pt-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <div className="col-auto d-flex navbar-nav">
                  <form
                    className="d-flex rounded-pill border border-info me-4"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="form-control me-2 rounded-pill border-0"
                      value={searchedText}
                      onChange={(e) => setSearchedText(e.target.value)}
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
          </div>
          {userReturned && (
            <Users
              favoriteUsers={favoriteUsers}
              userReturned={userReturned}
              addFavorite={addFavorite}
              getUserTweets={getUserTweets}
            />
          )}
          {tweetsReturned && (
            <Tweets
              favoriteUsers={favoriteUsers}
              tweetsReturned={tweetsReturned}
              addFavorite={addFavorite}
              getUserTweets={getUserTweets}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
